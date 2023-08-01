import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  public weatherSearchForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private weatherService: WeatherService) {}
  public weatherData: any = null;
  public currentDate = new Date();
  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues: any) {
    console.log(formValues);
    this.weatherService.getWeather(formValues.location).subscribe(
      data=>{
        console.log(data)
        this.weatherData = data;
      }
    )
  }
}

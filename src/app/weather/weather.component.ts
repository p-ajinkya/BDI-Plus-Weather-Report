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
  public weatherData: any = {
    "coord": {
        "lon": 73.8553,
        "lat": 18.5196
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 299.34,
        "feels_like": 299.34,
        "temp_min": 299.34,
        "temp_max": 299.34,
        "pressure": 1009,
        "humidity": 70,
        "sea_level": 1009,
        "grnd_level": 948
    },
    "visibility": 10000,
    "wind": {
        "speed": 6.3,
        "deg": 254,
        "gust": 11.95
    },
    "clouds": {
        "all": 100
    },
    "dt": 1690950813,
    "sys": {
        "type": 2,
        "id": 2083365,
        "country": "IN",
        "sunrise": 1690936937,
        "sunset": 1690983562
    },
    "timezone": 19800,
    "id": 1259229,
    "name": "Pune",
    "cod": 200
};
  public currentDate = new Date();
  public error: any = null;
  ngOnInit() {
    console.log(this.weatherData)
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  getCurrentDate(){
    setInterval(()=>{
      this.currentDate = new Date();
    }, 1000)
    return this.currentDate;
  }

  sendToAPIXU(formValues: any) {
    this.weatherData = null
    this.error = null;
    this.weatherService.getWeather(formValues.location).subscribe(
      data=>{
        this.weatherData = data;
      },error=>{
        console.log(' Error : ', error)
        this.error = error['error']
      }
    )
  }
}

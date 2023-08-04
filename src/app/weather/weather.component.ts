import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { AnimationLoader, provideLottieOptions } from 'ngx-lottie';

const daysArray = [
  { id: 1, name: 'Monday' },
  { id: 2, name: 'Tuesday' },
  { id: 3, name: 'Wednesday' },
  { id: 4, name: 'Thursday' },
  { id: 5, name: 'Friday' },
  { id: 6, name: 'Saturday' },
  { id: 7, name: 'Sunday' },
];

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [
    provideLottieOptions({
      player: () => import(/* webpackChunkName: 'lottie-web' */ 'lottie-web'),
    }),
    AnimationLoader,
  ],
})
export class WeatherComponent {
  lottieConfig: any;
  nightConfig: any;
  public weatherSearchForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private weatherService: WeatherService
  ) {
    this.lottieConfig = {
      path: '../../assets/animation_lkvjtple.json', // Replace with the actual path to your JSON file
      autoplay: true,
      loop: true,
    };
    this.nightConfig = {
      path: '../../assets/animation_lkvkw0jm.json',
      autoplay: true,
      loop: true,
    };
  }
  public weatherData: any = null;
  public currentDate = new Date();
  public error: any = null;
  public currentDay: any = null;
  ngOnInit() {
    console.log(this.weatherData);
    this.weatherSearchForm = this.formBuilder.group({
      location: [''],
    });
  }

  getDay(){
    const date: any = new Date(this.weatherData?.dt).getDay();
    this.currentDay = daysArray.find((e) => e['id'] === date);
    return this.currentDay;
  }
  

  sendToAPIXU(formValues: any) {
    this.weatherData = null;
    this.error = null;
    this.weatherService.getWeather(formValues.location).subscribe(
<<<<<<< Updated upstream
      (data) => {
        this.weatherData = data;
=======
      (data: any) => {
        console.log(data)
        this.weatherData = data['list'][0];
        console.log('Day : ', this.getDayorNight());
>>>>>>> Stashed changes
      },
      (error) => {
        console.log(' Error : ', error);
        this.error = error['error'];
      }
    );
  }

  getDayorNight() {
    const date = new Date(this.weatherData?.dt);
    const hours = date.getHours();
    // You can define the time range for day and night according to your location
    // For example, consider 6 AM to 6 PM as day, and the rest as night
    if(hours >= 5 && hours <= 19){
      return true;
    }else{
      return false
    }

  }
}

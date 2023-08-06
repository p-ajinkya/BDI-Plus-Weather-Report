import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { AnimationLoader, provideLottieOptions } from 'ngx-lottie';

const daysArray = [
  { id: 0, name: 'Sunday', ab:'Sun' },
  { id: 1, name: 'Monday', ab: 'Mon' },
  { id: 2, name: 'Tuesday', ab:'Tue' },
  { id: 3, name: 'Wednesday', ab:'Wed' },
  { id: 4, name: 'Thursday', ab:'Thus' },
  { id: 5, name: 'Friday', ab:'Fri' },
  { id: 6, name: 'Saturday', ab:'Sat' },
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
  rainingConfig: any;
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
    this.rainingConfig = {
      path: '../../assets/raining.json',
      autoplay: true,
      loop: true,
    };
  }
  public weatherData: any = null;
  public currentDate = new Date();
  public error: any = null;
  public currentDay: any = null;
  public rawData: any = null;
  public currentDetails: any = null;
  ngOnInit() {
    console.log(this.weatherData);
    this.weatherSearchForm = this.formBuilder.group({
      location: [''],
    });
  }

  getDay(){
    const date: any = new Date().getDay();
    this.currentDay = daysArray.find((e) => e['id'] === date);
    return this.currentDay;
  }
  

  sendToAPIXU(formValues: any) {
    this.weatherData = null;
    this.error = null;
    this.weatherService.getLatLong(formValues.location).subscribe(
      (data: any) => {
        console.log(data)
        this.currentDetails = data['list'][0]; 
        let obj = {
          lat: data['list'][0]?.coord?.lat,
          lon: data['list'][0]?.coord?.lon,
          city: data['list'][0]?.['name']
        }
        this.getWeatherData(obj)
      },
      (error) => {
        console.log(' Error : ', error);
        this.error = error['error'];
      }
    );
  }

  currentTimestamp: any;
  getWeatherData(data: any){
    this.currentTimestamp = Math.floor(this.currentDate.getTime() / 1000);

    this.weatherData = null;
    this.error = null;
    this.rawData = null;
    this.weatherService.getWeather(data).subscribe(
      (data: any) => {
        this.weatherData = data;
      },
      (error) => {
        console.log(' Error : ', error);
        this.error = error['error'];
      }
    );
  }

  getDayorNight() {
    const date = new Date();
    const sunsetTime = new Date(this.weatherData?.current?.sunset);
    if(date < sunsetTime){
      return true;
    }else{
      return false
    }

  }

  getCurrentDateTime(data?: any){
    let currentDate: any = data ? new Date(data) : new Date();
    return currentDate;
  }

  compareDate(data: any){
    const date = new Date().getDay();
    const sunsetTime = new Date(data * 1000).getDay();
    if(date === sunsetTime){
      return true;
    }else{
      return false
    }
  }

}

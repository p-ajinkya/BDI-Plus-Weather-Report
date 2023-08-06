import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  readonly BASE_URL: string = 'https://openweathermap.org/data/2.5/onecall';
  readonly App_ID: string = '439d4b804bc8187953eb36d2a8c26a02';
  readonly LAT_LONG_URL: string = 'https://openweathermap.org/data/2.5/find'
  getWeather(obj: any) {
    // const headers = new HttpHeaders({
    //   'X-RapidAPI-Key': '48d59cd838msh4d4e4f4f54ffbbep1f037fjsnbfc33cd369f3',
    //   'X-RapidAPI-Host': 'openweather43.p.rapidapi.com',
    // });
    let url = `${this.BASE_URL}?lat=${obj?.lat}&lon=${obj?.lon}&units=metric&appid=${this.App_ID}`;
    return this.http.get(`${url}`);
  }

  getLatLong(location: any){
    let url = `${this.LAT_LONG_URL}?q=${location}&appid=${this.App_ID}&units=metric`;
    return this.http.get(url)
  }
  
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  readonly BASE_URL: string = 'https://openweather43.p.rapidapi.com/weather';
  readonly App_ID: string = 'da0f9c8d90bde7e619c3ec47766a42f4';
  

  getWeather(location: any){
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '30933df99cmsh59d9d2d4c91c622p1abfcfjsn7d801e02eadc',
      'X-RapidAPI-Host': 'openweather43.p.rapidapi.com'
    });
    let url = `${this.BASE_URL}?key=${this.App_ID}&q=${location}`
      return this.http.get(
          `${url}`, {headers}
      );
  }
}

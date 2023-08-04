import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  readonly BASE_URL: string = 'https://openweathermap.org/data/2.5/find';
  readonly App_ID: string = '439d4b804bc8187953eb36d2a8c26a02';
  getWeather(location: any) {
<<<<<<< Updated upstream
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '48d59cd838msh4d4e4f4f54ffbbep1f037fjsnbfc33cd369f3',
      'X-RapidAPI-Host': 'openweather43.p.rapidapi.com',
    });
    let url = `${this.BASE_URL}?key=${this.App_ID}&q=${location}`;
    return this.http.get(`${url}`, { headers });
=======
    // const headers = new HttpHeaders({
    //   'X-RapidAPI-Key': '28deff224emshb7005f117987691p128b2fjsn8467d9fd717b',
    //   'X-RapidAPI-Host': 'openweather43.p.rapidapi.com',
    // });
    let url = `${this.BASE_URL}?q=${location}&appid=${this.App_ID}&units=metric`;
    return this.http.get(`${url}`);
>>>>>>> Stashed changes
  }

  
}

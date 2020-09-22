import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getWeather(city) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=d41bcd9ac7e4bacb723307b1c11f4b80');
  }
}

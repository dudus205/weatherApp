import {Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'weatherApp';
  temp: number;
  city = 'Warsaw';
  main: string;
  description: string;
  pressure: string;
  realTemp: number;
  minTemp: number;
  maxTemp: number;
  wind: number;
  sunset: string;
  sunrise: string;
  userTime: string;
  constructor(private http: HttpService) { }
  ngOnInit(): void{
    this.updateWeather();
  }
  time(sec1, sec2): void{
    const date1 = new Date(sec1 * 1000);
    this.sunrise = date1.toLocaleTimeString();
    const date2 = new Date(sec2 * 1000);
    this.sunset = date2.toLocaleTimeString();
  }
  updateWeather(): void{
    this.http.getWeather(this.city).subscribe(data => {
      this.temp = Math.floor(data.main.temp - 273);
      this.main = data.weather[0];
      this.description = data.weather[0].description;
      this.pressure = data.main.pressure;
      this.realTemp = Math.floor(data.main.feels_like - 273);
      this.minTemp = Math.floor(data.main.temp_min - 273);
      this.maxTemp = Math.floor(data.main.temp_max - 273);
      this.wind = data.wind.speed;
      this.time(data.sys.sunrise, data.sys.sunset);
    });
  }
}

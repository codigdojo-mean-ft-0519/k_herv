import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //
  title = 'weatherAPI';
  //weathers = 999;
  constructor(private weatherService: WeatherService) {}

  // ngOnInit(): void {
  //   this.weatherService.getWeather('Dallas').subscribe(weather => {
  //     console.log(weather);
  //   });
  // }
} // End class

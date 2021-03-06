import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  @Input() weatherToShow: any;
  weathers: any;
  averageTemp: number;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeather('seattle').subscribe(weather => {
      if (weather['main'] != null) {
        console.log(weather);
        this.weathers = weather;
        this.averageTemp =
          (parseInt(weather['main']['temp_max']) +
            parseInt(weather['main']['temp_min'])) /
          2;
        console.log(this.averageTemp);
      }
    });
  }
}
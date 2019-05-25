import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css'],
})
export class BurbankComponent implements OnInit {
  @Input() weatherToShow: any;
  weathers: any;
  averageTemp: number;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeather('burbank').subscribe(weather => {
      if (weather['main'] != null) {
        console.log(weather);
        console.log(weather['main']);
        console.log('low ', weather['main']['temp_min']);
        console.log('high ', weather['main']['temp_max']);
        let intLow = parseInt(weather['main']['temp_min'], 10);
        let intHigh = parseInt(weather['main']['temp_max'], 10);
        let temp =
          (parseInt(weather['main']['temp_max']) +
            parseInt(weather['main']['temp_min'])) /
          2;
        console.log('low is ', intLow);
        console.log('high is ', intHigh);
        console.log('hello');
        console.log('temp', temp);
        this.weathers = weather;
        this.averageTemp = temp;
      }
    });
  }
}

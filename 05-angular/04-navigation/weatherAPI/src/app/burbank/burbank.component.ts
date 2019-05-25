import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css'],
})
export class BurbankComponent implements OnInit {
  @Input() weatherToShow: any;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeather('Dallas').subscribe(weather => {
      console.log(weather);
      console.log(weather.main);
      console.log(weather.main.temp_min);
    });
  }
}

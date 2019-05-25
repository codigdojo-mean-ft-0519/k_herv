import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService implements OnInit {
  //
  title = 'pokemon';
  constructor(private _http: HttpClient) {}

  // https://api.openweathermap.org/data/2.5/weather?q=seattle&units=imperial&appid=a85a5c44d911e1ab4866a79badddf21e
  // This is run automatically on Angular if it exists on a component
  ngOnInit(): void {}
  getWeather(cityname: string) {
    return this._http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=imperial&appid=a85a5c44d911e1ab4866a79badddf21e`
    );
  }
}
// this._http.getPokemon(2).subscribe(pokemon => {
//   console.log(pokemon.name);
// });

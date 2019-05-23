import { Injectable } from '@angular/core';
import { Cake } from './cake.model'; //this is needed in case we have something of the Type Cake
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Cake } from './cake'; deleted because of the above

@Injectable({
  providedIn: 'root',
})
export class CakeService {
  constructor(private _http: HttpClient) {} // crud had (private _http: HttpClient) {}

  addCake(cake: Cake): Observable<Cake> {
    console.log('stuff');
    return this._http.post<Cake>('/cakes/', cake);
  }

  updateCake(cake: Cake): Observable<Cake> {
    console.log('stuff');
    return this._http.put<Cake>(`/cakes/${cake._id}`, cake);
  }

  showAllCakes(): Observable<Cake[]> {
    return this._http.get<Cake[]>('/cakes');
  }
} // end export class

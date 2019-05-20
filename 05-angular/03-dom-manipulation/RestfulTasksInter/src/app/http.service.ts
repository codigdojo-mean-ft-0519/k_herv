import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task'; //added with Wes
import { Observable } from 'rxjs'; //added with Wes

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getTasks(); //will get red squiggle unless the thing after dot is in
  }

  getTasks(): Observable<Task[]> {
    //added Task type with Wes
    // our http response is an Observable, store it in a variable
    //let tempObservable = this._http.get('/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    //tempObservable.subscribe(data => console.log('Goot our tasks!', data));
    return this._http.get<Task[]>('/tasks'); //added Task type with Wes
  }

  // make method to get one task
  getTask(id: string): Observable<Task> {
    return this._http.get<Task>(`/tasks/${id}`); //getting from API aka database
  }
} // end of class

// getTasks(): Observable<{ tasks: Task[] }>  { // Observable<Task[]>
//   //added Task type with Wes
//   // our http response is an Observable, store it in a variable
//   //let tempObservable = this._http.get('/tasks');
//   // subscribe to the Observable and provide the code we would like to do with our data from the response
//   //tempObservable.subscribe(data => console.log('Goot our tasks!', data));
//   return this._http.get < {tasks: Task[]}>('/tasks'); //added Task type with Wes
// }
// }

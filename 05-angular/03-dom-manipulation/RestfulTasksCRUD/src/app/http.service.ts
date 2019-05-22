import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task'; //added with Wes
import { Observable } from 'rxjs'; //added with Wes

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _http: HttpClient) {}

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

  // create
  createTask(task: Task): Observable<Task> {
    return this._http.post<Task>(`/tasks`, task);
  }

  //update
  updateTask(task: Task): Observable<Task> {
    console.log('in updateTask, id:  ', task._id);
    return this._http.put<Task>(`/tasks/${task._id}`, task);
  }

  //destroy
  destroyTask(taskid: string): Observable<Task> {
    console.log('in destroy in service for id', taskid);
    return this._http.delete<Task>(`/tasks/${taskid}`);
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

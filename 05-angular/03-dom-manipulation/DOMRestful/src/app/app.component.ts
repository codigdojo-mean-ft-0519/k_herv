import { Component, OnInit } from '@angular/core';
//Implement OnInit
import { discardPeriodicTasks } from '@angular/core/testing';
import { HttpService } from './http.service';
import { Task } from './task'; //added with Wes
import { Observable } from 'rxjs'; //added with Wes

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService) {}
  title = 'Restful Tasks API';
  tasks: Task[]; //added with Wes...fixed red squiggles, but a lot more had to happen before that
  // tasks = [
  //   { title: 'mow', description: '20 acres' },
  //   { title: 'cut', description: 'all trees' },
  //   { title: 'sweep', description: 'half walk' },
  // ];
  second = 'All the tasks:';
  third = 'The third task:';
  // ngOnInit will run when the component is initialized, after the construcor method
  ngOnInit() {
    this.getTasksFromService();
  }
  getTasksFromService() {
    let observable: Observable<Task[]> = this._httpService.getTasks(); //added typ of observable with Wes
    observable.subscribe(data => {
      console.log('Got our tasks!', data);
      this.tasks = data;
      // let dummyObJOfArray = `{'tasks': ${data}}`;
      // console.log(dummyObJOfArray);
      // console.log(Object.values(dummyObJOfArray));
      // this.tasks = data[dummyObJOfArray['tasks']];
      // var obj = { foo: 'bar', baz: 42 };
      // console.log(Object.values(obj)); // ['bar', 42]
    });
  }
}
// alltasks = ['first task', 'second task', 'third task'];

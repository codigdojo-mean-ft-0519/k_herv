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
  title = 'Restful Nested Project';
  tasks: Task[]; //added with Wes...fixed red squiggles, but a lot more had to happen before that
  task: Task;
  tasks2: Task[]; //added for restful interactive
  taskdetail = {
    title: 'dummy taskTitle',
    description: 'dummytaskDescription',
  };

  // tasks = [
  //   { title: 'mow', description: '20 acres' },
  //   { title: 'cut', description: 'all trees' },
  //   { title: 'sweep', description: 'half walk' },
  // ];
  second = 'All the tasks:';
  third = 'The third task:';
  constructor(private _httpService: HttpService) {}
  // ngOnInit will run when the component is initialized, after the constructor method
  ngOnInit() {
    const id = '5ce0e5136102776230e2c41d';
    this.getTasksFromService();
    //this.getTaskFromService(id);
  }
  getTasksFromService() {
    const observable: Observable<Task[]> = this._httpService.getTasks(); //added type of observable with Wes  //gets stuff from http.service.ts
    observable.subscribe(tasksFromAPI => {
      console.log('Got our tasks!', tasksFromAPI);
      this.tasks = tasksFromAPI; //this.tasks = data['tasks']
      // let dummyObJOfArray = `{'tasks': ${data}}`;
      // console.log(dummyObJOfArray);
      // console.log(Object.values(dummyObJOfArray));
      // this.tasks = data[dummyObJOfArray['tasks']];
      // var obj = { foo: 'bar', baz: 42 };
      // console.log(Object.values(obj)); // ['bar', 42]
    });
  }
  getTaskFromService(id: string) {
    this._httpService.getTask(id).subscribe(task => {
      console.log('this is the task we received', task);
      this.task = task; //ng does a change detection
    });
  }

  selectTask(task: Task) {
    this.task = task;
  }

  onButtonGetTasks() {
    //in html could have just used getTasksFromService
    const observable: Observable<Task[]> = this._httpService.getTasks();
    observable.subscribe(tasksFromAPI => {
      console.log('Got our tasks from button!', tasksFromAPI);
      this.tasks2 = tasksFromAPI;
    });
  }

  onButtonGetTaskDetails(idTask: string) {
    console.log(`id task is ${idTask}`);
    this._httpService.getTask(idTask).subscribe(task => {
      console.log(`task title is ${task.title}`);
      this.task = task;
    });
  }
  onButtonGetTask(tasknum) {
    alert(`you clicked for tasks number ${tasknum}`);
  }
}
// alltasks = ['first task', 'second task', 'third task'];

// below platform way
// const observable = this._httpService.getTasks(); //added typ of observable with Wes   : Observable<Task[]> removed Monday
// observable.subscribe(data => {
//   console.log('Got our tasks!', data);
//   //this.tasks = data;
//   this.tasks = data.tasks; //platform way
//   // let dummyObJOfArray = `{'tasks': ${data}}`;
//   // console.log(dummyObJOfArray);
//   // console.log(Object.values(dummyObJOfArray));
//   // this.tasks = data[dummyObJOfArray['tasks']];
//   // var obj = { foo: 'bar', baz: 42 };
//   // console.log(Object.values(obj)); // ['bar', 42]
// });
// }

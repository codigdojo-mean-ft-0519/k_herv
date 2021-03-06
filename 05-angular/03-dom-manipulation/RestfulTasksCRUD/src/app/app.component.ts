import { Component, OnInit } from '@angular/core';
//Implement OnInit
import { discardPeriodicTasks } from '@angular/core/testing';
import { HttpService } from './http.service';
import { Task } from './task'; //added with Wes
import { Observable } from 'rxjs'; //added with Wes
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  //newTask: any; // per Amy
  title = 'Restful Tasks CRUD';
  tasks: Task[]; //added with Wes...fixed red squiggles, but a lot more had to happen before that
  task: Task;
  //tasks2: Task[]; //added for restful interactive
  newTask = new Task();
  selectedTask: Task;
  // taskdetail = {
  //   title: 'dummy taskTitle',
  //   description: 'dummytaskDescription',
  // };

  // tasks = [
  //   { title: 'mow', description: '20 acres' },
  //   { title: 'cut', description: 'all trees' },
  //   { title: 'sweep', description: 'half walk' },
  // ];

  constructor(private _httpService: HttpService) {}
  // ngOnInit will run when the component is initialized, after the constructor method
  ngOnInit() {
    const id = '5ce0e5136102776230e2c41d';
    this.getTasksFromService();
    this.getTaskFromService(id);
  }
  getTasksFromService() {
    // used in CRUD html to get "tasks"
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
    // used in CRUD html to get "task"
    this._httpService.getTask(id).subscribe(task => {
      console.log('this is the task we received', task);
      this.task = task; //ng does a change detection
    });
  }
  // onButtonGetTasks() {
  //   //in html could have just used getTasksFromService
  //   const observable: Observable<Task[]> = this._httpService.getTasks();
  //   observable.subscribe(tasksFromAPI => {
  //     console.log('Got our tasks from button!', tasksFromAPI);
  //     this.tasks = tasksFromAPI;
  //   });
  // }
  onSubmitNew(event: Event, form: NgForm) {
    console.log('user clicked the create button for a new task');
    event.preventDefault();
    this._httpService.createTask(this.newTask).subscribe(newTaskFromAPI => {
      this.tasks.push(newTaskFromAPI);
    });
    // Code to send off the form data (this.newTask) to the Service
    // ...
    // Reset this.newTask to a new, clean object.
    this.newTask = new Task();
    form.reset();
  }

  onSubmitUpdate(event: Event, editForm: NgForm) {
    console.log('clicked to update ', this.selectedTask, this.selectedTask.title);
    this._httpService.updateTask(this.selectedTask).subscribe(updateTask => {
      this.selectedTask = null;
      this.tasks = this.tasks.map(taskFromArray => (updateTask._id === taskFromArray._id ? updateTask : taskFromArray));
      // this.tasks = [...this.tasks.filter(taskFromArray => updateTask._id !== taskFromArray._id), updateTask]; //alternate version to tasks.map
      console.log('in on Submit Update', updateTask);
    });
  }

  removeTask(idTask: string): void {
    console.log('this task should be removed', idTask);

    this._httpService.destroyTask(idTask).subscribe(deletedTask => {
      console.log('deleted task', deletedTask);
      this.tasks = this.tasks.filter(taskFromArray => taskFromArray._id !== deletedTask._id);
    });
  }

  showEditForm(clickedTask: Task) {
    console.log('user clicked first edit button to see this task', clickedTask);
    this.selectedTask = this.selectedTask === clickedTask ? null : { ...clickedTask }; //spreading caused the non repeat
  }
} // end class

// onButtonGetTaskDetails(idTask: string) {
//   console.log(`id task is ${idTask}`);
//   this._httpService.getTask(idTask).subscribe(task => {
//     console.log(`task title is ${task.title}`);
//     this.task = task;
//   });
// }
// onButtonGetTask(tasknum) {
//   alert(`you clicked for tasks number ${tasknum}`);
// }

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

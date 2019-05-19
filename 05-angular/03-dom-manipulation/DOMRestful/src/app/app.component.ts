import { Component, OnInit } from '@angular/core';
//Implement OnInit
import { discardPeriodicTasks } from '@angular/core/testing';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService) {}
  title = 'Restful Tasks API';
  //tasks = [];
  tasks = [
    { title: 'mow', description: '20 acres' },
    { title: 'cut', description: 'all trees' },
    { title: 'sweep', description: 'half walk' },
  ];
  second = 'All the tasks:';
  third = 'The third task:';
  // ngOnInit will run when the component is initialized, after the construcor method
  ngOnInit() {
    this.getTasksFromService();
  }
  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log('Got our tasks!', data);
      // this.tasks = data['/tasks'];
    });
  }
}
// alltasks = ['first task', 'second task', 'third task'];

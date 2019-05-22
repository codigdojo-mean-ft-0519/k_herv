import { Component, OnInit, Input } from '@angular/core'; //added Input per platform to enable nested components

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() taskToShow: any;

  constructor() {}

  ngOnInit() {}
}

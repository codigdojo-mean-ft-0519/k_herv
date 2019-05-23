import { Component, OnInit, Input } from '@angular/core';
import { Cake } from '../cake.model';

@Component({
  selector: 'app-cake-detail',
  templateUrl: './cake-detail.component.html',
  styleUrls: ['./cake-detail.component.css'],
})
export class CakeDetailComponent implements OnInit {
  @Input() cakeToShow: Cake;

  constructor() {}

  getAvg(arr) {
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }

  ngOnInit() {}
}

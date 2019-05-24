import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Cake } from '../cake.model';

@Component({
  selector: 'app-cake-detail',
  templateUrl: './cake-detail.component.html',
  styleUrls: ['./cake-detail.component.css'],
})
export class CakeDetailComponent implements OnInit, OnChanges {
  avg: number | string = 0;
  @Input() cakeToShow: Cake;

  constructor() {}

  ngOnChanges() {
    // runs when change detectd
    console.log("I'm running!", this.cakeToShow);
    const sum = this.cakeToShow.ratings.reduce((memo, currentRating) => {
      console.log("We're finding", memo, currentRating);
      return memo + currentRating.rating;
    }, 0);
    //
    this.avg =
      sum / this.cakeToShow.ratings.length || 'This cake is not yet rated';
    console.log('our ACTUAL average is....', this.avg);
  }

  // getAvg(arr) {
  //   let sum = arr[0];
  //   for (var i = 1; i < arr.length; i++) {
  //     sum += arr[i];
  //   }
  //   return sum / arr.length;
  // }

  ngOnInit() {}
}

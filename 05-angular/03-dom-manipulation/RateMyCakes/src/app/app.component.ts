import { Component, OnInit } from '@angular/core';
import { Cake, Rating } from './cake.model';
import { CakeService } from './cake.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { RatingService } from './rating.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Rate my Cakes';
  cake = new Cake();
  // You can't just say it will be an array of cakes...
  // You have to set up the array to be empty (to receive lotsa cakes)
  cakes: Cake[] = [];
  selectedCake: Cake;

  constructor(
    private cakeService: CakeService,
    private ratingService: RatingService
  ) {}

  ngOnInit(): void {
    this.getAllCakes();
  }

  getAllCakes() {
    this.cakeService.showAllCakes().subscribe(allCakes => {
      console.log('Getting YUMMY delicious cakes!!');
      this.cakes = allCakes;
    });
  }

  onSubmitCake(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('You clicked me! Our new cake is: ', this.cake);
    console.log('Next stop: the addCake function in our service.');
    this.cakeService.addCake(this.cake).subscribe(newCakeFromDB => {
      this.cakes.push(newCakeFromDB);
      console.log(
        'Reporting in from our component file! Got the following cake back from our DB: ',
        newCakeFromDB
      );
    });
    console.log(
      'Our cakes array now contains the following cakes...',
      this.cakes
    );
    this.cake = new Cake();
    console.log('Cake has been wiped, ready for the creation of a new cake!');
    form.reset();
  }

  onReviewCake(event: Event, form: NgForm, cake: string) {
    event.preventDefault();
    console.log(form.value);
    this.ratingService
      .addRating({ ...form.value, cake })
      .subscribe(newRating => {
        const foundCake = this.cakes.find(
          cakeFromArray => newRating.cake === cakeFromArray._id
        );
        foundCake.ratings.push(newRating);
        console.log(this.cakes);
      });
  }
  onSelectCake(clickedCake: Cake) {
    // Define a "selectedCake" as our clickedCake. (we will use this information to send to our child!)
    // Otherwise, if selectedCake is already defined as our clicked cake, then turn it to back null.
    // The visual effect is toggling selectedCake on and off (and therefor our child toggles on and off)
    this.selectedCake = this.selectedCake === clickedCake ? null : clickedCake;
    console.log('Our selected task is....', this.selectedCake);
  }
}

import { Component, OnInit } from '@angular/core';
import { Location } from '../location';
import { LocationService } from '../location.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivityService } from '../activity.service';
import { Activity } from '../activity';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css'],
})
export class LocationListComponent implements OnInit {
  locations: Location[] = [];
  user: User;
  private randomGold(min, max): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  onClick(location: Location) {
    const newGold = this.randomGold(location.minGold, location.maxGold);
    this.userService.updateUser(newGold);
    const newActivity = this.activityService.createActivity(
      newGold,
      location.name
    );
    this.activityService.updateActivities(newActivity);
  }

  constructor(
    private locationService: LocationService,
    private userService: UserService,
    private activityService: ActivityService
  ) {}

  ngOnInit() {
    this.locations = this.locationService.getLocations();
  }
}

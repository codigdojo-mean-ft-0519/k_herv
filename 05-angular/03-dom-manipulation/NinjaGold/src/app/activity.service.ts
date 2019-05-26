import { Injectable } from '@angular/core';
import { Activity } from './activity';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  activities: Activity[] = [];

  getActivities(): Activity[] {
    return this.activities;
  }

  createActivity(gold: number, location: string) {
    return new Activity(gold, location);
  }

  updateActivities(newActivity: Activity) {
    this.activities.push(newActivity);
  }
  constructor() {}
}

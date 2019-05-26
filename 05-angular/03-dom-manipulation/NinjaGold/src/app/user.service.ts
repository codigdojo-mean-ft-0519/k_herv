// this file created with ng generate service user
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User = {
    gold: 0,
  };
  getUser(): User {
    return this.user;
  }
  updateUser(gold: number): void {
    console.log('Updating gold....' + gold);
    this.user.gold += gold;
  }
  constructor() {}
}

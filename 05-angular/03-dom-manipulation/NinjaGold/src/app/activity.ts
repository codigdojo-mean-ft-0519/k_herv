export class Activity {
  createdAt: number = Date.now();

  constructor(public gold: number, public location: string) {}
}

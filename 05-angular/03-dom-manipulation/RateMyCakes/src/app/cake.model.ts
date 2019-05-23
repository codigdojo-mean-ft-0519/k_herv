export class Cake {
  _id: string;
  bakedBy: string;
  imageUrl: string;
  ratings: Rating[];
  createdAt: number;
  updatedAt: number;
}

export class Rating {
  _id: string;
  cake: string;
  rating: number;
  comment: string;
}

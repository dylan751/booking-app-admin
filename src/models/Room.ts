export interface RoomNumbers {
  number: number;
  unavailableDates: { type: Date[] };
}

export interface Room {
  _id: number;
  title: string;
  price: number;
  maxPeople: number;
  description: string;
  roomNumbers?: RoomNumbers[];
}

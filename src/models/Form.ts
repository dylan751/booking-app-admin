export interface Form {
  _id?: number;
  userId: string;
  isTravelForWork: boolean;
  firstName: string;
  lastName: string;
  email: string;
  whoBookingFor: number; // 0: i'm the main guest, 1: i'm booking for someone else
  specialRequest: string;
  country: string;
  phoneNumber: string;
  price: number;
  hotelId: string;
  roomIds: string;
  startDate: Date;
  endDate: Date;
}

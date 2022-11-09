export interface Hotel {
  _id: number;
  name: string;
  type: string;
  city: string;
  address?: string;
  distance?: string;
  photos?: string[];
  title: string;
  description?: string;
  rating?: number;
  rooms?: string[];
  cheapestPrice?: number;
  featured?: boolean;
}

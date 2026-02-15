export interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  text: string;
  verified?: boolean;
}

export interface Amenity {
  label: string;
}

export interface ScheduleItem {
  day: string;
  hours: string;
}

export interface StaffMember {
  name: string;
  role: string;
  bio: string;
}
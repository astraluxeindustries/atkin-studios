import { Review, ScheduleItem, Amenity } from './types';

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Keylee P',
    date: 'Oct 13, 2025',
    rating: 5,
    text: "Heather is an excellent yoga teacher. She brings me great peace and joy when I am practicing yoga in her studio. very good with the rain stick. I feel very blessed to have found this yoga studio."
  },
  {
    id: '2',
    author: 'Jim L',
    date: 'Sep 30, 2025',
    rating: 5,
    text: "Atkin Studio is so quaint and perfect for classes and conversations with fellow yogi's. Such a beautiful setting and a class act business, with wonderful people in the classes. I highly recommend you give it a try!"
  },
  {
    id: '3',
    author: 'Jamie S',
    date: 'Sep 29, 2025',
    rating: 5,
    verified: true,
    text: "Heather is an amazing teacher, making people of every skill level for comfortable and challenged. The class not only helps me move my body, it helps me focus my mind and has brought me community."
  },
  {
    id: '4',
    author: 'Samantha O',
    date: 'Sep 26, 2025',
    rating: 5,
    text: "Ahhh this space is a hidden gem in the heart of downtown. It's magical and relaxing, clean and beautiful! I love attending classes lead by Heather. It feels like coming home. Her space helps you feel relaxed, centered and welcome."
  },
  {
    id: '5',
    author: 'Sarah N',
    date: 'Sep 25, 2025',
    rating: 5,
    text: "I always enjoy each class. It's a safe space where everyone is welcome. I feel more grounded and physically better after each time I go."
  }
];

export const HOURS: ScheduleItem[] = [
  { day: 'Monday', hours: '5:00 PM - 7:00 PM' },
  { day: 'Tuesday', hours: '9:00 AM - 4:00 PM' },
  { day: 'Wednesday', hours: '9:00 AM - 8:30 PM' },
  { day: 'Thursday', hours: '9:00 AM - 4:00 PM' },
  { day: 'Friday', hours: 'Closed' },
  { day: 'Saturday', hours: 'Closed' },
  { day: 'Sunday', hours: 'Closed' },
];

export const AMENITIES: Amenity[] = [
  { label: 'LGBTQIA Friendly' },
  { label: 'Disabled Access' },
  { label: 'WiFi' },
  { label: 'Kid Friendly' },
  { label: 'Free Parking' }
];

export const POLICIES = {
  cancellation: "We kindly request a minimum of 48 hours notice for cancellations of events and one-on-one appointments. Should you need to cancel within this timeframe, please notify us so that we may reschedule your session. Please note that no refunds will be provided for no-shows.",
  classCancellation: "To cancel your class, kindly notify us at least 24 hours in advance. We understand that unforeseen circumstances may arise, and we appreciate your cooperation in keeping us informed. By doing so, we can reschedule your class credit and ensure that you don't miss out."
};

export const CONTACT_INFO = {
  address: "437 North Main Street, St. George, UT 84770",
  phone: "(435) 680-5613",
  email: "contact@atkinstudios.com" // Inferring email structure or placeholder
};
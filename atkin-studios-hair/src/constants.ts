import { Star, MapPin, Phone, Clock, Calendar, Check, Shield, CreditCard, Wifi, Accessibility, Baby } from 'lucide-react';

export const SITE_DATA = {
  name: "Atkin Studios",
  tagline: "Yoga • Event Center • Fine Art Photography",
  location: {
    address: "437 North Main Street",
    city: "St. George",
    state: "UT",
    zip: "84770",
    fullAddress: "437 North Main Street, St. George, UT 84770",
    mapUrl: "https://maps.google.com/?q=437+North+Main+Street,+St.+George,+UT+84770"
  },
  contact: {
    phone: "(435) 680-5613",
    phoneClean: "4356805613"
  },
  description: "Atkin Studios, located in downtown St. George, Utah, is more than just a home yoga studio—it’s a vibrant event center fueled by the passion of Mo and Heather Atkin. Heather, an experienced yoga teacher certified in accessible and trauma-informed yoga, is dedicated to supporting your individual needs and healing. Mo, an active photographer, brings his unique artistic vision and love for community to the space. Together, they have created a welcoming environment that fosters inclusivity and creativity, inviting everyone to participate in yoga classes and community events. With safety and accessibility at the forefront of our mission, we aim to ensure that all individuals feel at home. Our supportive, casual atmosphere is designed for collaboration and connection. We’re excited to build a nurturing community together. Join us to elevate your practice and forge meaningful relationships.",
  hours: [
    { day: "Monday", time: "5:00 PM - 7:00 PM" },
    { day: "Tuesday", time: "9:00 AM - 4:00 PM" },
    { day: "Wednesday", time: "9:00 AM - 8:30 PM" },
    { day: "Thursday", time: "9:00 AM - 4:00 PM" },
    { day: "Friday", time: "Closed" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" }
  ],
  reviews: [
    {
      author: "Keylee P",
      date: "Oct 13, 2025",
      rating: 5,
      title: "Heather Atkin",
      content: "Heather is an excellent yoga teacher. She brings me great peace and joy when I am practicing yoga in her studio. very good with the rain stick. I feel very blessed to have found this yoga studio."
    },
    {
      author: "Jim L",
      date: "Sep 30, 2025",
      rating: 5,
      title: "Venue",
      content: "Atkin Studio is so quaint and perfect for classes and conversations with fellow yogi’s. Such a beautiful setting and a class act business, with wonderful people in the classes. I highly recommend you give it a try!"
    },
    {
      author: "Jamie S",
      date: "Sep 29, 2025",
      rating: 5,
      title: "Venue",
      verified: true,
      content: "Heather is an amazing teacher, making people of every skill level for comfortable and challenged. The class not only helps me move my body, it helps me focus my mind and has brought me community."
    },
    {
      author: "Samantha O",
      date: "Sep 26, 2025",
      rating: 5,
      title: "Venue",
      content: "Ahhh this space is a hidden gem in the heart of downtown. It's magical and relaxing, clean and beautiful!"
    }
  ],
  policies: {
    cancellation: "We kindly request a minimum of 48 hours notice for cancellations of events and one-on-one appointments. Should you need to cancel within this timeframe, please notify us so that we may reschedule your session. Please note that no refunds will be provided for no-shows.",
    classCancellation: "To cancel your class, kindly notify us at least 24 hours in advance. We understand that unforeseen circumstances may arise, and we appreciate your cooperation in keeping us informed. By doing so, we can reschedule your class credit and ensure that you don't miss out. Please be aware that refunds are not available for no-shows."
  },
  amenities: [
    { label: "WiFi", icon: Wifi },
    { label: "Disabled Access", icon: Accessibility },
    { label: "LGBTQIA Friendly", icon: Star },
    { label: "Kid Friendly", icon: Baby },
    { label: "Free Parking", icon: MapPin }
  ],
  paymentMethods: ["Visa", "MasterCard", "Discover", "American Express", "Debit card", "Cash", "Check"]
};

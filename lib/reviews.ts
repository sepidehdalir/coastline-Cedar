// Real customer reviews from Coastline Cedar's Google Business Profile.
// Text is provided manually by the business owner. We do NOT scrape Google,
// and we do NOT use reviewer profile photos.

export type Review = {
  name: string;
  rating: number;
  dateLabel: string;
  text: string;
};

export const reviews: Review[] = [
  {
    name: 'Tina T.',
    rating: 5,
    dateLabel: 'a week ago',
    text: 'Very happy with our custom cedar planter. It was made quickly, delivered on time, and looks perfect on our deck.',
  },
  {
    name: 'Kent MacWilliam',
    rating: 5,
    dateLabel: 'a week ago',
    text: 'Had some planters made and delivered and I’m very pleased with the outcome. Good communication too. Thanks!',
  },
  {
    name: 'Christopher Markowsky',
    rating: 5,
    dateLabel: 'a week ago',
    text: 'Coastline made well crafted cedar planter boxes to our exact specs. These are high quality and the communication and service was fantastic!',
  },
  {
    name: 'Kate and Allison',
    rating: 5,
    dateLabel: 'a week ago',
    text: 'Beautiful planters, well-made, fast service and free delivery. I highly recommend.',
  },
];

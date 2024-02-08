export interface Specialization {
  id: number;
  label: string;
  imageUrl: string;
  description: string;
}

export const SPECIALISATIONS: Specialization[] = [
  {
    id: 1,
    label: 'Education',
    imageUrl: '/assets/images/specialization/specialization-education.jpg',
    description:
      'Crafting innovative and sustainable academic facilities, from primary schools to universities.',
  },
  {
    id: 2,
    label: 'Transportation',
    imageUrl: '/assets/images/specialization/specialization-transportation.jpg',
    description:
      'Planning, designing, and managing transportation systems worldwide for safe and reliable commuting.',
  },
  {
    id: 3,
    label: 'Healthcare',
    imageUrl: '/assets/images/specialization/specialization-health-care.jpg',
    description:
      'Constructing innovative and sustainable healthcare facilities worldwide, meeting rigorous health standards. ',
  },
  {
    id: 4,
    label: 'Oil and Gas',
    imageUrl: '/assets/images/specialization/specialization-oil-and-gas.jpg',
    description:
      'Providing EPC services for the oil and gas industry, prioritising safety and quality.',
  },
  {
    id: 5,
    label: 'Leisure',
    imageUrl: '/assets/images/specialization/specialization-leisure.jpg',
    description:
      'Creating unforgettable destinations by combining architecture, landscape, entertainment, and history.',
  },
  {
    id: 6,
    label: 'Building',
    imageUrl: '/assets/images/specialization/specialization-building.jpg',
    description:
      "Redefining spaces to meet clients' needs, from innovative homes to retail spaces.",
  },
];

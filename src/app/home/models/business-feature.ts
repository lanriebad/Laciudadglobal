export interface BusinessFeature {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
  fragment: string;
}

export const BUSINESS_FEATURES: BusinessFeature[] = [
  // {
  //   id: 1,
  //   title: 'Architectural design of commercial and mixed use development',
  //   imageUrl: '/assets/images/building-features/building-features-architecture.jpg',
  //   link: '/what-we-do',
  //   fragment: 'architectural-design'
  // },
  {
    id: 2,
    title: 'Industrial and Residential Buildings',
    imageUrl:
      '/assets/images/building-features/building-features-industrial.jpg',
    link: '/what-we-do',
    fragment: 'industrial-buildings',
  },
  // {
  //   id: 3,
  //   title: 'Facility Services and Maintenance',
  //   imageUrl: '/assets/images/building-features/building-features-facility.jpg',
  //   link: '/what-we-do',
  //   fragment: 'facility-service'
  // },
  {
    id: 4,
    title: 'Infrastructure Building and Civil Work',
    imageUrl:
      '/assets/images/building-features/building-features-infrastructure.jpg',
    link: '/what-we-do',
    fragment: 'infrastructure-buildings',
  },
  {
    id: 5,
    title: 'Project Management',
    imageUrl:
      '/assets/images/building-features/building-features-project-mgmt.jpg',
    link: '/what-we-do',
    fragment: 'project-management',
  },
  {
    id: 6,
    title: 'Engineering Procurement',
    imageUrl:
      '/assets/images/building-features/building-features-engineering.jpg',
    link: '/what-we-do',
    fragment: 'engineering-procurement',
  },
];

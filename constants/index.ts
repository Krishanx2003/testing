export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Create Project',
    route: '/projects/create',
  },
  {
    label: 'My Profile',
    route: '/profile',
  },
]

export const projectDefaultValues = {
  title: '',
  description: '',
  categoryId: '',
  url: '',
}

export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Contact Us", url: "/" }, // Changed to Contact Us
    ],
  },
  {
    title: "Discover",
    links: [
      { title: "Upcoming Events", url: "/" }, // Changed to Upcoming Events
      { title: "Popular Events", url: "/" }, // Changed to Popular Events
      { title: "Categories", url: "/" }, // Changed to Categories
      { title: "Submit an Event", url: "/" }, // Changed to Submit an Event
    ],
  },
  {
    title: "Connect",
    links: [
      { title: "Community Forum", url: "/" }, // Changed to Community Forum
      { title: "Newsletter", url: "/" }, // Changed to Newsletter
      { title: "Ambassadors", url: "/" }, // Changed to Ambassadors
      { title: "Volunteer Opportunities", url: "/" }, // Added Volunteer Opportunities
    ],
  },
];

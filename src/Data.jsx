import Project1 from './assets/project1.png';
import Project2 from './assets/project2.png';
import Project3 from './assets/project3.png';
import Project4 from './assets/project4.png';
import Project5 from './assets/project5.png';
import Project6 from './assets/project6.png';

import Testimonial1 from './assets/vl.png';
import Testimonial2 from './assets/vpb.png';
import Testimonial3 from './assets/vpm.png';


export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Services',
    path: 'services',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Works',
    path: 'work',
  },
  
  {
    name: 'Volunteering',
    path: 'testimonial',
  },
  
  {
    name: 'Blog',
    path: 'blog',
  },
  
];

export const services = [
  {
    id: 1,
    name: 'UI/UX Designer',
    title: 'Web Design and App Design',
    description:
      'Experienced UI/UX Designer skilled in creating user-centered designs, wireframes, and prototypes to deliver intuitive and engaging digital experiences. ',
      
  },
  {
    id: 2,
    name: ' Social Media Designer ',
    title: ' Social Media Marketing ',
    description:
      'Creative Social Media Designer with expertise in crafting visually engaging content and campaigns across various platforms. Skilled in graphic design, branding to boost online presence and engagement.',
  },
  {
    id: 3,
    name: ' Public Speaker ',
    title: ' Public Speaker ',
    description:
      'A state level public speaker with leadership skills and creative ideation capabilities ',
  },
  
];

export const skills = [
  {
    id: 1,
    name: 'Java',
    percentage: 85,
    description:
      '',
  },

  {
    id: 2,
    name: 'JavaScript',
    percentage: 65,
    description:
      '',
  },

  {
    id: 3,
    name: 'C',
    percentage: 90,
    description:
      '',
  },

  {
    id: 4,
    name: 'Figma',
    percentage: 95,
    description:
      '',
  },

  {
    id: 5,
    name: 'React',
    percentage: 70,
    description:
      '',
  },

  {
    id: 6,
    name: 'Canva',
    percentage: 80,
    description:
      '',
  },
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: 'Full Stack',
    title: 'FinanciallyStable',
    description:
      'Built a React app for financial management with expense tracking, budget setting, and dynamic data visualization using Material-UI, Redux, and Chart.js.',
    link: 'https://github.com/Ashitha-Shetty/FinanciallyStable',
  },
  {
    id: 2,
    img: Project2,
    category: 'UI UX Design',
    title: 'Musica',
    description:
      'A music streaming website designed for better user experience.',
    link: 'https://www.figma.com/proto/blKDvLIwQh8alTh0b7jbZf/MUSICA?node-id=8-34&t=g2qNyl4xWAGwm8It-1&scaling=min-zoom&content-scaling=fixed&page-id=8%3A33',
  },
  {
    id: 3,
    img: Project3,
    category: 'DBMS',
    title: 'Avion Management System',
    description:
      'Created a database management system for flight schedules, automated ticket booking, and designed a responsive website to improve user experience.',
    link : 'https://github.com/Ashitha-Shetty/Avion',
  },
  {
    id: 4,
    img: Project4,
    category: 'ARVR',
    title: 'Perspective',
    description:
      'Built a web app for graph generation and visualization, using MongoDB for data management and Echo3D for interactive AR displays.',
    link: 'https://github.com/Ashitha-Shetty/Perspective',
  },
  {
    id: 5,
    img: Project5,
    category: 'UI UX Design',
    title: 'Blakeys',
    description:
      'A food website with carousel feature.',
    link: 'https://www.figma.com/proto/y80DVAMpNOlBYAJ7z6vd3R/Blakeys?node-id=2-22&node-type=CANVAS&t=HlQRWWBW8r9bBzoe-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A22',
  },
  {
    id: 6,
    img: Project6,
    category: 'UI UX Design',
    title: 'Wallet',
    description:
      'A mobile baanking app with easy navigation and better UX features',
    link: 'https://www.figma.com/proto/2LIAHzOD14xUM4ZzoffPYU/Banking-App?node-id=1-728&node-type=CANVAS&t=kMfI4XRgIVbmCOOa-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2',
  },
];



export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: 'Literary Society',
    author: 'Team Head',
    description:
      'Head of Public Speaking Association during the year 2023-24. Heading the team of 150+ members for year 2024-25.',
  },
  {
    id: 2,
    img: Testimonial2,
    name: 'Point Blank',
    author: 'Social Media Designer',
    description:
      'Designed creative posts for the club’s Instagram page, increasing engagement and followers. Designed a brochure for the team.',
  },
  {
    id: 3,
    img: Testimonial3,
    name: 'Psych Mic',
    author: 'Member',
    description:
      'Hosted over 35 events ranging from an audience from 30 to 3000. Trained the juniors on hosting events both formal and informal.',
  },
  
];

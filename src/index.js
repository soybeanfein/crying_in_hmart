import { createRoot } from 'react-dom/client';
import './styles.css';
import { App } from './App';

// Replace these URLs with your own image URLs
const images = [
  // Front
  { position: [0, 0, 1.5], rotation: [0, 0, 0], url: '/photo4.jpeg', scale: [1.5, 1, 1]
  },
  // Back
  { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: '/photo1.png', scale: [1, 1, 1] },
  { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: '/photo1.png', scale: [1, 1, 1] },
  // Left
  { position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: 'https://static01.nyt.com/images/2022/06/12/magazine/12mag-talk-03/12mag-talk-03-superJumbo.jpg' },
  { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: 'https://static01.nyt.com/images/2022/06/12/magazine/12mag-talk-03/12mag-talk-03-superJumbo.jpg' },
  { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: 'https://static01.nyt.com/images/2022/06/12/magazine/12mag-talk-03/12mag-talk-03-superJumbo.jpg' },
  // Right
  { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: 'https://static01.nyt.com/images/2022/06/12/magazine/12mag-talk-03/12mag-talk-03-superJumbo.jpg' },
  { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: 'https://static01.nyt.com/images/2022/06/12/magazine/12mag-talk-03/12mag-talk-03-superJumbo.jpg' },
  { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: 'https://static01.nyt.com/images/2022/06/12/magazine/12mag-talk-03/12mag-talk-03-superJumbo.jpg' }
];

createRoot(document.getElementById('root')).render(<App images={images} />);
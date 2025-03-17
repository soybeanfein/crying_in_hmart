import { createRoot } from 'react-dom/client';
import './styles.css';
import { App } from './App';

// Replace these URLs with your own image URLs
const images = [
  // Front
  { position: [0, 0, 1.5], rotation: [0, 0, 0], url: 'https://asianamericanmusics17.wordpress.com/wp-content/uploads/2017/04/approved20by20michelle.jpeg?w=523&h=349' },
  // Back
  { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: 'https://asianamericanmusics17.wordpress.com/wp-content/uploads/2017/04/approved20by20michelle.jpeg?w=523&h=349' },
  { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: 'https://asianamericanmusics17.wordpress.com/wp-content/uploads/2017/04/approved20by20michelle.jpeg?w=523&h=349' },
  // Left
  { position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: 'https://asianamericanmusics17.wordpress.com/wp-content/uploads/2017/04/approved20by20michelle.jpeg?w=523&h=349' },
  { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: 'https://asianamericanmusics17.wordpress.com/wp-content/uploads/2017/04/approved20by20michelle.jpeg?w=523&h=349' },
  { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: 'https://asianamericanmusics17.wordpress.com/wp-content/uploads/2017/04/approved20by20michelle.jpeg?w=523&h=349' },
  // Right
  { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: 'https://asianamericanmusics17.wordpress.com/wp-content/uploads/2017/04/approved20by20michelle.jpeg?w=523&h=349' },
  { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: 'https://asianamericanmusics17.wordpress.com/wp-content/uploads/2017/04/approved20by20michelle.jpeg?w=523&h=349' },
  { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: 'https://asianamericanmusics17.wordpress.com/wp-content/uploads/2017/04/approved20by20michelle.jpeg?w=523&h=349' }
];

createRoot(document.getElementById('root')).render(<App images={images} />);
// store.js
import {create} from 'zustand';

// Define RGB values for blue and red
const blueRGB = [0, 0, 1]; // Pure blue
const redRGB = [1, 0, 0]; // Pure red

const useStore = create(set => ({
  color: blueRGB,  // Start with blue RGB values
  positionX: 2, // Initial X position
  toggleProperties: () => set(state => ({
    color: state.color[0] === 0 ? redRGB : blueRGB,  // Toggle between blue and red
    positionX: state.positionX === 2 ? -2 : 2 // Toggle X position
  }))
}));

export default useStore;

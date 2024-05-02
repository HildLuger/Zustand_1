import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #111;
    font-family: 'Press Start 2P', cursive; // Set the imported font as the default font
    font-size: 16px; // Default font size for larger screens

    // Media query for mobile devices
    @media (max-width: 768px) {
      font-size: 12px; // Smaller font size for mobile devices
    }
  }
  canvas {
    width: 100% !important;
    height: 100% !important;
  }
`;

export default GlobalStyles;

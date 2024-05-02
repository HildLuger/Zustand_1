import styled from 'styled-components';

const ClickMeText = styled.div`
  font-family: 'Press Start 2P', cursive; // Ensure the font name matches exactly if loaded externally
  color: white; // Text color
  background-color: transparent;
  padding: 10px;
  margin: 20px auto; // Center horizontally, specific margin on top and bottom
  text-align: center;

  // Positioning styles
  position: absolute; // Absolute positioning relative to the nearest positioned ancestor (typically the root element)
  bottom: 10%; // Align at the bottom with 10% margin from the bottom edge
  left: 50%; // Center horizontally
  transform: translateX(-50%); // Offset by 50% of its own width to truly center
  width: fit-content; // Ensure the div only takes up the necessary width
`;

export default ClickMeText;

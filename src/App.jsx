
import GlobalStyles from './GlobalStyles';
import My3DScene from './My3DScene';
import ClickMeText from './ClickMeText'; // Adjust the path as necessary

function App() {
  return (
    <>
      <GlobalStyles />
      <My3DScene />
      <ClickMeText>Click me to change my color from blue to red...</ClickMeText>
    </>
  );
}

export default App;

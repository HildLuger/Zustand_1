/* eslint-disable react/no-unknown-property */
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useSpring, a } from '@react-spring/three';
import useStore from './store'; // Ensure this path is correct
import Stars from './Stars'; // Ensure this path is correct

const RotatingBox = () => {
  const meshRef = useRef();
  const { color, positionX, toggleProperties } = useStore(state => ({
    color: state.color,
    positionX: state.positionX,
    toggleProperties: state.toggleProperties
  }));

  const { colorAnim, positionXAnim } = useSpring({
    colorAnim: color,
    positionXAnim: positionX,
    config: { duration: 1000 } // Smooth transition over 1 second
  });

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <a.mesh position-x={positionXAnim} ref={meshRef} onClick={toggleProperties}>
      <boxGeometry args={[2, 2, 2]} />
      <a.meshPhysicalMaterial color={colorAnim} />
    </a.mesh>
  );
};

const My3DScene = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Adjust camera position based on the viewport width
  const cameraPosition = viewportWidth < 768 ? [0, 0, 15] : [0, 0, 25];
  const fov = viewportWidth < 768 ? 75 : 15; // Optionally adjust the field of view as well

  return (
    <Canvas camera={{ position: cameraPosition, fov: fov }}>
      <ambientLight intensity={0} />
      <directionalLight position={[10, 10, 10]} intensity={100} />
      <directionalLight position={[-10, -10, 10]} intensity={100} />
      <EffectComposer>
        <Bloom 
          luminanceThreshold={0.1} 
          luminanceSmoothing={0.1} 
          intensity={2} 
          radius={1}
        />
      </EffectComposer>
      <RotatingBox />
      <Stars />
    </Canvas>
  );
};

export default My3DScene;

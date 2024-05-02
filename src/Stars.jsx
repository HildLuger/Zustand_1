import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// eslint-disable-next-line react/prop-types
const Stars = ({ count = 50000, speed = 1 }) => {
    const mesh = useRef();
    useThree(); // Access the camera directly from react-three-fiber context

    const points = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const color = new THREE.Color();
        const factor = 20;

        for (let i = 0; i < count; i++) {
            let x = (Math.random() - 0.5) * factor * 100;
            let y = (Math.random() - 0.5) * factor * 100;
            let z = -Math.random() * factor * 100;
            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            const vertexColor = color.setScalar(Math.random());
            colors[i * 3] = vertexColor.r;
            colors[i * 3 + 1] = vertexColor.g;
            colors[i * 3 + 2] = vertexColor.b;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 0.5,
            sizeAttenuation: true,
            vertexColors: true,
            depthWrite: false,
            transparent: true,
        });

        return new THREE.Points(geometry, material);
    }, [count]);

    useFrame(() => {
        // Simulate moving through the starfield by moving stars towards the camera
        mesh.current.position.z += speed;

        // Loop stars to the front if they move past the camera
        if (mesh.current.position.z > 1200) {
            mesh.current.position.z -= 400;
        }
    });

    // eslint-disable-next-line react/no-unknown-property
    return <primitive object={points} ref={mesh} />;
};

export default Stars;

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShapes = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-2, 1, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#00F5FF" wireframe />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[2, -1, -1]}>
          <octahedronGeometry args={[0.8]} />
          <meshStandardMaterial color="#8B5CF6" wireframe />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={2.5}>
        <mesh position={[0, 2, -2]}>
          <tetrahedronGeometry args={[1.2]} />
          <meshStandardMaterial color="#FF6B35" wireframe />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={2} floatIntensity={1.8}>
        <mesh position={[-1.5, -2, 1]}>
          <icosahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#00F5FF" wireframe />
        </mesh>
      </Float>

      <Float speed={2.2} rotationIntensity={1.2} floatIntensity={2.2}>
        <mesh position={[1.8, 1.5, 1.5]}>
          <dodecahedronGeometry args={[0.7]} />
          <meshStandardMaterial color="#8B5CF6" wireframe />
        </mesh>
      </Float>
    </group>
  );
};

export default FloatingShapes;
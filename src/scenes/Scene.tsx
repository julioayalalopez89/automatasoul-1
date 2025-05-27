// src/scenes/Scene.tsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'

import { RobocitoModel } from '../components/Robocito'

import { Suspense } from 'react'
import { FondoEscena } from '../components/Background.tsx'

export default function Scene() {
  return (
    
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        //zIndex: -1,
      }}
      camera={{ position: [0, 2, 5], fov: 50 }}
      
    >
      <ambientLight intensity={0.5} />
    <directionalLight position={[5, 5, 5]} />
      
      {/* Múltiples roboces en la escena */}
      <RobocitoModel position={[0, 0, 0]} />
      <RobocitoModel position={[2, 0, -1]} />
      <RobocitoModel position={[-2, 0, 1]} />
      
       <Suspense fallback={null}>
        <FondoEscena scale={1} position={[0, -1, 0]} />
        <RobocitoModel scale={0.5} position={[0, 0, 0]} />
      </Suspense>

      
      <OrbitControls />
    </Canvas>
  )
}

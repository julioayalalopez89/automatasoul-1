// src/scenes/Scene.tsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'

import { RobocitoModel } from '../components/Robocito'

import { Suspense} from 'react'
import { FondoEscena } from '../components/Background.tsx'

//myself
import { ChipModel } from '../components/Chip.tsx'


export default function Scene({ rotationY = 0 }: { rotationY: number }) {

  return (


    <Canvas
      camera={{ position: [0, 2, 5], fov: 60 }}
      style={{ width: '100vw', height: '100vh' }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 5]} />
      <Suspense fallback={null}>
        < FondoEscena  />

        <ChipModel
          position={[0, 0, 0]}
          scale={1}
          rotation={[0, Math.PI / 4, 0]}
        />

        <RobocitoModel  position={[0, 0.1, 0]} scale={0.3} rotation={[0,  rotationY*2, 0]} />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxAzimuthAngle={0.3}
        minAzimuthAngle={-0.3}
        maxPolarAngle={Math.PI / 2.2}
        minPolarAngle={Math.PI / 2.8}
      />
    </Canvas>



    /*
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
      
    //multiples roboces en la escena
      <RobocitoModel position={[0, 0, 0]} />
      <RobocitoModel position={[2, 0, -1]} />
      <RobocitoModel position={[-2, 0, 1]} />
      
       <Suspense fallback={null}>
        <FondoEscena scale={1} position={[0, -1, 0]} />
        <RobocitoModel scale={0.5} position={[0, 0, 0]} />
      </Suspense>

      
      <OrbitControls />
    </Canvas> */
  )
}

import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

export function ChipModel(props: any) {
  const group = useRef<THREE.Group>(null!)
  const { scene } = useGLTF('/models/robots/myself/chip.gltf') // Asegúrate de que el path coincida

  return (
    <primitive
      ref={group}
      object={scene}
      scale={1.5}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      {...props}
    />
  )
}

// ⚡ Esto precarga el modelo para que no haya delay al usarlo
useGLTF.preload('/models/robots/myself/chip.gltf')
// src/components/FondoEscena.tsx
import { useGLTF } from '@react-three/drei'

export function FondoEscena(props: any) {
  const { scene } = useGLTF('/models/background/aerial_rocks_02_4k.gltf/aerial_rocks_02_4k.gltf')
  return <primitive object={scene} {...props} />
}

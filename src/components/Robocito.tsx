// src/components/Robocito.tsx
import { useGLTF } from '@react-three/drei'

export function RobocitoModel(props: any) {
  const gltf = useGLTF('/models/robots/RobotExpressive.glb') // la ruta es desde la carpeta public

  return (
    <primitive
      object={gltf.scene}
      scale={2}
      position={[0, -1, 0]}
      rotation={[0, Math.PI, 0]} // Opcional: gira el robot
      {...props}
    />
  )
}
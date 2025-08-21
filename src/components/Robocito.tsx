import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect, useRef } from 'react'
//import { useEffect, useRef, useState } from 'react'

export function RobocitoModel({ animation = null,triggerAnim = 0, ...props }: any) {
  const group = useRef(null)
  const gltf = useGLTF('/models/robots/RobotExpressive.glb')
  const { actions } = useAnimations(gltf.animations, group)
  //EN CASO QUE SE QUIEERA SABER SI ESTA EJECUTANDO UNA ACCION isPlaying
  // const [isPlaying, setIsPlaying] = useState(false)

  //EJECUTAR ANIMACIONES 3 SEGUNDOS
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null

    if (animation && actions && actions[animation]) {
      actions[animation].reset().fadeIn(0.2).play()
      //setIsPlaying(true)
      timer = setTimeout(() => {
        actions[animation]?.fadeOut(0.2)
        //setIsPlaying(false)
      }, 3000) // 3 segundos

      return () => {
        if (timer) clearTimeout(timer)
        actions[animation]?.fadeOut(0.2)
       //setIsPlaying(false)
      }
    }
    return undefined
  }, [animation, actions, triggerAnim])

  return (
    <primitive
      ref={group}
      object={gltf.scene}
      scale={2}
      position={[0, -1, 0]}
      rotation={[0, Math.PI, 0]}
      {...props}
    />
  )
}
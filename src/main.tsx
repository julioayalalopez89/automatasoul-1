import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'

// Archivo: App.tsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './App.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const Robocito = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color='orange' />
  </mesh>
)

export default function App() {
  return (
    <div className="app-container">
      <h1>Bienvenido a Roboces</h1>
      <Canvas style={{ height: '400px' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Robocito />
        <OrbitControls />
      </Canvas>
    </div>
  )
}



import { useState, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { Canvas } from '@react-three/fiber'
import './App.css'
import { RobocitoModel } from './components/Robocito'
//detectar movimientos del mouse
import Scene  from './scenes/Scene'
//<Scene />


function App() {

  // Añade useEffect y mousemove:
const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 }) // valores normalizados

//📦 useEffect para capturar el movimiento del mouse
useEffect(() => {
  const handleMouseMove = (e) => {
    const x = e.clientX / window.innerWidth   // 0 a 1
    const y = e.clientY / window.innerHeight  // 0 a 1
    setMousePos({ x, y })
  }

  window.addEventListener('mousemove', handleMouseMove)
  return () => window.removeEventListener('mousemove', handleMouseMove)
}, [])

//3. 🔄 Calcular ángulos de rotación
const autoRotationY = (mousePos.x - 0.5) * Math.PI // eje Y (izquierda/derecha)
const autoRotationX = (mousePos.y - 0.5) * Math.PI // eje X (arriba/abajo), con signo invertido



  //const [count, setCount] = useState(0)
 
  // If you want to create a ref for the RobocitoModel, use useRef:

  const [rotationY, setRotationY] = useState(0)

  const accionarRobocito = () => {
    setRotationY(prev => prev + Math.PI / 4) // Rota 45 grados
  }

 const [animation, setAnimation] = useState<string | null>('Death')

 // Ejecuta la animación inicial solo una vez y la detiene después de 2 segundos (ajusta el tiempo según tu animación)
useEffect(() => {
  if (animation === 'Death') {
    const timer = setTimeout(() => {
      setAnimation(null) // Detiene la animación
    }, 4000) // Cambia 2000 por la duración real de tu animación en milisegundos
    return () => clearTimeout(timer)
  }
}, [animation])

 
  const accionarAnimacion = () => {
  setAnimation('Dance') // Cambia 'Dance' por el nombre real de la animación si es diferente
}
  
  //CAMBIAR EXPRESION
  

  

  return (
    <>
    
    <button onClick={accionarAnimacion}>Bailar 🕺</button>

    <div className="relative w-screen h-screen">
     
        <button   onClick={accionarRobocito} className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-blue-500 text-white px-6 py-3 rounded shadow-lg" >
            Crear nuevo robot
          </button>

         
        <Scene rotationY={rotationY}/>
        <Canvas>
      <RobocitoModel animation={animation} position={[0, 0, 0]} scale={0.9}  rotation={[autoRotationX, rotationY + autoRotationY, 0]} /></Canvas>
        
     </div>
    </>
  )
}

export default App

/*
  
    <div> 
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Automata Soul</h1>
      <p className="mb-4">Bienvenido al mundo de robots digitales</p>
      <div className="w-full h-96 border-2 border-blue-500">
       
      </div>
      <button id="create_robot" className="absolute inset-0 z-0 mt-6 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
        Crear nuevo robot
      </button>
    </div>
      </div> 

*/



    



/** <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>  */
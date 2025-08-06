import { useState, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { Canvas } from '@react-three/fiber'
import './App.css'
import { RobocitoModel } from './components/Robocito'
//detectar movimientos del mouse
import Scene from './scenes/Scene'
//<Scene />

import { useRobotState } from './hooks/useRobotState'

//LIB FOR LOGIN//
import LoginButton from './components/Auth/LoginButton.tsx';
//import LogoutButton from './components/Auth/LogoutButton.tsx';  // Asegúrate de tener el archivo correcto
import { supabase } from './lib/supabaseClient.ts';
import type { User } from '@supabase/supabase-js';

function App() {


const [user, setUser] = useState<User | null>(null);
 ////LOGIN/////

  useEffect(() => {
    supabase.auth.getUser().then(({ data }: { data: { user: User | null } }) => {
      setUser(data.user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event: any, session: any) => {
      setUser(session?.user || null);
    });

    return () => listener?.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);  // Elimina al usuario del estado
  };

//////LOGOUT/////


 /* 

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null)
    })

    return () => listener?.subscription.unsubscribe()*/




  // Usamos el hook personalizado para obtener y modificar el estado del robot
  const [robot, setRobot] = useRobotState()
  /**
   * Función que simula jugar con el robot:
   * Aumenta la felicidad, pero reduce energía.
   */
   const play = () => {
     setRobot((prev: any) => ({
      ...prev,
      happiness: Math.min(100, prev.happiness + 10),
      energy: Math.max(0, prev.energy - 5),
    }))
  }

  /**
   * Función que simula alimentar al robot:
   * Reduce el hambre y mejora un poco la energía.
   */
  const feed = () => {
    setRobot((prev: any) => ({
      ...prev,
      hunger: Math.max(0, prev.hunger - 15),
      energy: Math.min(100, prev.energy + 5),
    }))
  }

  /**
   * Reinicia el robot eliminando el estado guardado.
   */
  const reset = () => {
    localStorage.removeItem('robotState')
    window.location.reload() // Refresca para aplicar el estado por defecto
  }




  
  // Añade useEffect y mousemove:
const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 }) // valores normalizados

//📦 useEffect para capturar el movimiento del mouse
useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
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

 const [animation, setAnimation] = useState<string | null>()
const [triggerAnim, setTriggerAnim] = useState(0)

 
  const accionarAnimacion = () => {
  setAnimation('Dance') // Cambia 'Dance' por el nombre real de la animación si es diferente
  setTriggerAnim(prev => prev + 1) // Cambia el trigger para reiniciar la animación

}
  
 
  

  

  return (
    <>




    <div>
        {user ? (
          <>
            <p>Hola, {user.email}</p>
            <button onClick={handleLogout}>Logout</button> {/* Botón de Logout */}
          </>
        ) : (
          <LoginButton />
        )}
      </div>



    


    
     <div style={{ padding: '2rem' }}>
      <h1>Hola, soy {robot.name} 🤖</h1>
      <p>Felicidad: {robot.happiness}</p>
      <p>Energía: {robot.energy}</p>
      <p>Hambre: {robot.hunger}</p>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={play}>🎮 Jugar</button>
        <button onClick={feed}>🍔 Alimentar</button>
        <button onClick={reset} style={{ marginLeft: '1rem' }}>🔄 Reiniciar</button>
      </div>
    </div>





    <button onClick={accionarAnimacion}>Bailar 🕺</button>

    <div className="relative w-screen h-screen">
     
        <button   onClick={accionarRobocito} className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-blue-500 text-white px-6 py-3 rounded shadow-lg" >
            GIRAR ROBOT
          </button>

         
        <Scene rotationY={rotationY}/>
        <Canvas>
      <RobocitoModel animation={animation} triggerAnim={triggerAnim} position={[0, 0, 0]} scale={0.9}  rotation={[autoRotationX, rotationY + autoRotationY, 0]} /></Canvas>
        
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
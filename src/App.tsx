import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Scene from './scenes/Scene'

//<Scene />


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div> 
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Automata Soul</h1>
      <p className="mb-4">Bienvenido al mundo de robots digitales</p>
      <div className="w-full h-96 border-2 border-blue-500">
       
      </div>
      <button className="mt-6 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
        Crear nuevo robot
      </button>
    </div>
      </div> 
    </>
    
  )
}

export default App
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
import { useState, useEffect } from 'react'

const defaultState = {
  name: 'Robocito',
  happiness: 50,
  energy: 80,
  hunger: 20
}

export function useRobotState() {
  const [robot, setRobot] = useState(() => {
    // Este bloque solo se ejecuta una vez (cuando se monta)
    const saved = localStorage.getItem('robotState')
    return saved ? JSON.parse(saved) : defaultState
  })

  // Cada vez que cambie el robot, lo guardamos en localStorage
  useEffect(() => {
    localStorage.setItem('robotState', JSON.stringify(robot))
  }, [robot])

  return [robot, setRobot] as const
}

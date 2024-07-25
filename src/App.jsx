import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/card.jsx'
import Board from './assets/components/Board.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        Memory Game
      </h1>
      <Board />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
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

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const addValue = () => {
    setCount(count + 1)
  }
  const decrementValue = () => {
    if (count - 1 >= 0) {
      setCount(count - 1)
    }
  }
  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={addValue}>Increment value</button><br />
      <button onClick={decrementValue}>Decrement value</button>
    </>
  )
}

export default App

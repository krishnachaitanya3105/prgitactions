import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleInputChange = (e) => {
    const value = Number(e.target.value)
    if (!isNaN(value)) setCount(value)
  }

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Simple Counter</h2>
      <input
        type="number"
        value={count}
        onChange={handleInputChange}
        style={{ padding: '5px', width: '80px', textAlign: 'center' }}
      />
      <div style={{ marginTop: '10px' }}>
        <button onClick={increment} style={{ margin: '5px' }}>+</button>
        <button onClick={decrement} style={{ margin: '5px' }}>-</button>
        <button onClick={reset} style={{ margin: '5px' }}>Reset</button>
      </div>
    </div>
  )
}

export default App

// ----------------------------------------------
// Objective:
// Build a Click Counter App with React
// - Use useState for state management
// - Include Increment & Decrement buttons
// - Prevent going below 0
// ----------------------------------------------

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prev => prev + 1)
  const decrement = () => {
    if (count > 0) setCount(prev => prev - 1)
  }

  return (
    <div className="app-container">
      <div className="counter-card">
        <h1>Click Counter</h1>
        <p className="count">{count}</p>
        <div className="buttons">
          <button onClick={increment}>➕ Increase</button>
          <button onClick={decrement} disabled={count === 0}>➖ Decrease</button>
        </div>
        {count === 0 && <p className="limit-msg">You've reached the limit!</p>}
      </div>
    </div>
  )
}

export default App

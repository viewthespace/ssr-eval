import React, { useState } from 'react'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>hello, world!</div>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  )
}

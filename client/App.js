import React, { useState } from 'react'

export const App = ({ count: rawCount = 0 }) => {
  const [count, setCount] = useState(rawCount)

  return (
    <>
      <div>hello, world!</div>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  )
}

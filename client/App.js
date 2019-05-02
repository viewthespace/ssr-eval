import React, { useState } from 'react'
import { connect } from 'react-redux'

const _App = ({ count: rawCount = 0 }) => {
  const [count, setCount] = useState(rawCount)

  console.log(rawCount)

  return (
    <>
      <div>hello, world!</div>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  )
}

export const App = connect(({ count }) => ({ count }))(_App)

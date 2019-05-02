import React, { useState } from 'react'
import { connect } from 'react-redux'

const _App = ({ store, count }) => {
  return (
    <>
      <div>hello, world!</div>
      <p>{count}</p>
      <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>
        Increment
      </button>
    </>
  )
}

export const App = connect(({ count }) => ({ count }))(_App)

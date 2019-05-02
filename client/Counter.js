import React from 'react'
import { connect } from 'react-redux'
import { store } from './store'

const _Counter = ({ count }) => (
  <>
    <p>{count}</p>
    <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>
      Increment
    </button>
  </>
)

export const Counter = connect(({ count }) => ({ count }))(_Counter)

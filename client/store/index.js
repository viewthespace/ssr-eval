import { createStore } from 'redux'
import counterApp from '../reducers'

let store

export function initStore(preloadedState) {
  store = createStore(counterApp, preloadedState)

  return store
}

export { store }

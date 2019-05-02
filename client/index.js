import React from 'react'
import { hydrate } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { App } from './App'
import counterApp from './reducers'

const preloadedState = window.__STATE__

delete window.__STATE__

const store = createStore(counterApp, preloadedState)

hydrate(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.querySelector('#root')
)

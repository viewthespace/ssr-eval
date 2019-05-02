import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { App } from './App'
import counterApp from './reducers'
import { BrowserRouter } from 'react-router-dom'
import { initStore } from './store'

const preloadedState = window.__STATE__

delete window.__STATE__

const store = initStore(preloadedState)

hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.querySelector('#root')
)

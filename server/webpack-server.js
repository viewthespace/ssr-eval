import React from 'react'
import webpack from 'webpack'
import path from 'path'
import middleware from 'webpack-dev-middleware'
import webpackOptions from '../webpack.config'
import express from 'express'
import fs from 'fs'
import { App } from '../client/App'
import { renderToString } from 'react-dom/server'

import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import { initStore } from '../client/store'

const compiler = webpack(webpackOptions)
const app = express()
const state = {
  count: 129837
}

app.use(middleware(compiler, {}))

// app.get("/api/user/1", (req, res) => {
//   res.json({ name: 'sam' })
// });

app.get('/listings', (req, res) => {
  res.sendFile('listings.html', { root: __dirname })
})

app.get('*', (req, res) => {
  const store = initStore(state)

  const renderedApp = renderToString(
    <StaticRouter location={req.url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  )

  const finalState = store.getState()

  const rawHtml = fs.readFileSync(path.join(__dirname, 'index.html')).toString()

  const renderedHtml = rawHtml
    .replace('{{ content }}', renderedApp)
    .replace('{{ initialState }}', JSON.stringify(finalState))

  res.send(renderedHtml)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

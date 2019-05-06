import React from 'react'
import webpack from 'webpack'
import path from 'path'
import middleware from 'webpack-dev-middleware'
import webpackOptions from '../webpack.config'
import express from 'express'
import fs from 'fs'
import { App } from '../client/App'
import { renderToString } from 'react-dom/server'

const compiler = webpack(webpackOptions)
const app = express()
const state = {
  count: 129837
}

app.use(
  require('prerender-node')
    .set('prerenderServiceUrl', 'http://localhost:3000/')
    .set('prerenderToken', 'fhy33Rc46NHXT0PkkcQn')
)

app.use(middleware(compiler, {}))

// app.get("/api/user/1", (req, res) => {
//   res.json({ name: 'sam' })
// });

app.get('/listings', (req, res) => {
  res.sendFile('listings.html', { root: __dirname })
})

app.get('*', (req, res) => {
  const renderedApp = renderToString(<App count={state.count} />)

  const rawHtml = fs.readFileSync(path.join(__dirname, 'index.html')).toString()

  const renderedHtml = rawHtml
    .replace('{{ content }}', renderedApp)
    .replace('{{ initialState }}', JSON.stringify(state))

  res.send(renderedHtml)
})

app.listen(8080, () => console.log('Example app listening on port 3000!'))

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

app.use(middleware(compiler, {}))

// app.get("/api/user/1", (req, res) => {
//   res.json({ name: 'sam' })
// });

app.get('/listings', (req, res) => {
  res.sendFile('listings.html', { root: __dirname })
})

app.get('*', (req, res) => {
  const renderedApp = renderToString(<App />)

  const rawHtml = fs.readFileSync(path.join(__dirname, 'index.html')).toString()

  const renderedHtml = rawHtml.replace('{{ content }}', renderedApp)

  res.send(renderedHtml)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

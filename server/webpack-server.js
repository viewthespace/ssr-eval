import React from 'react'
import webpack from 'webpack'
import path from 'path'
import middleware from 'webpack-dev-middleware'
import webpackOptions from '../webpack.config'
import express from 'express'
import fs from 'fs'
import { App } from '../client/App'
import { renderToString } from 'react-dom/server'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import fetch from 'node-fetch'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const compiler = webpack(webpackOptions)
const app = express()
const state = {
  count: 129837
}

app.use(middleware(compiler, {}))

app.get('/listings', (req, res) => {
  res.sendFile('listings.html', { root: __dirname })
})

app.get('*', (req, res) => {
  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      fetch,
      uri: 'https://48p1r2roz4.sse.codesandbox.io',
      headers: {
        cookie: req.header('Cookie')
      }
    }),
    cache: new InMemoryCache()
  })

  const ProvidedApp = (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )

  getDataFromTree(ProvidedApp).then(() => {
    const renderedApp = renderToString(ProvidedApp)

    const rawHtml = fs
      .readFileSync(path.join(__dirname, 'index.html'))
      .toString()

    const renderedHtml = rawHtml
      .replace('{{ content }}', renderedApp)
      .replace('{{ initialState }}', JSON.stringify(client.extract()))

    res.send(renderedHtml)
  })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

import React from 'react'
import { hydrate } from 'react-dom'
import { App } from './App'
import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'

const client = new ApolloClient({
  cache: new InMemoryCache().restore(window.__STATE__),
  ssrForceFetchDelay: 100,
  link: createHttpLink({
    uri: 'https://48p1r2roz4.sse.codesandbox.io'
  })
})

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

hydrate(<Root />, document.querySelector('#root'))

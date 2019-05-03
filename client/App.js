import React, { useState } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export const App = ({ count: rawCount = 0 }) => (
  <>
    <div>hello, world!</div>
    <span>Number of conversions from USD:</span>
    <Query
      query={gql`
        {
          rates(currency: "USD") {
            name
          }
        }
      `}
    >
      {({ loading, error, data }) => <div>{!loading && data.rates.length}</div>}
    </Query>
  </>
)

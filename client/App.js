import React, { useState } from 'react'
import { connect } from 'react-redux'
import { NavLink, Route, Switch } from 'react-router-dom'
import { Counter } from './Counter'
import { Score } from './Score'

const _App = ({ count }) => (
  <>
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/counter">Counter</NavLink>
        </li>
        <li>
          <NavLink to="/score">Score</NavLink>
        </li>
      </ul>
    </div>
    <Switch>
      <Route path="/counter" component={Counter} />
      <Route path="/score" component={Score} />
      <Route path="/" render={() => <div>i am home </div>} />
    </Switch>
  </>
)

export const App = connect(({ count }) => ({ count }))(_App)

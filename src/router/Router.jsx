import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Explore, Movie } from 'pages'
import { EXPLORE_SCREEN_ROUTE, DETAILED_MOVIES_ROUTE } from './constants'

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => <Redirect to={EXPLORE_SCREEN_ROUTE} />} />
        <Route exact path={EXPLORE_SCREEN_ROUTE}>
          <Explore />
        </Route>
        <Route path={`${DETAILED_MOVIES_ROUTE}/:imdbID`}>
          <Movie />
        </Route>
      </Switch>
    </Router>
  )
}

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Explore, Movie } from '../pages'
import { EXPLORE_SCREEN_ROUTE, DETAILED_MOVIES_ROUTE } from './constants'

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path={EXPLORE_SCREEN_ROUTE}>
          <Explore />
        </Route>
        <Route path={`${DETAILED_MOVIES_ROUTE}/:imdbID`}>
          <Movie />
        </Route>
      </Switch>
    </Router>
  )
}

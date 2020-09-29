import { createSelector } from 'reselect'
import objKeysToLowerCase from 'helpers/objKeysToLowerCase'

export const moviesSelector = createSelector(
  (state) => state.search.movies,
  (movies) => movies.map((m) => objKeysToLowerCase(m)),
)

export const detailedMoviesSelector = createSelector(
  (state) => state.search.detailedMovies,
  (detailedMovies) => detailedMovies.map((m) => objKeysToLowerCase(m)),
)

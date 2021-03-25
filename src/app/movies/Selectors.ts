import { createSelector } from 'reselect'
import objKeysToLowerCase from '../../helpers/objKeysToLowerCase'
import { SystemState } from '../store'

export const detailedMoviesSelector = createSelector(
  (state: SystemState) => state.movies.detailedMovies,
  (detailedMovies) => detailedMovies.map((m) => objKeysToLowerCase(m)) as typeof detailedMovies,
)

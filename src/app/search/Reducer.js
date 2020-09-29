import { createReducer } from '@reduxjs/toolkit'
import { GET_MOVIES_BY_TITLE, GET_DETAILED_MOVIE_INFO } from './constants'

const INITIAL_STATE = {
  isFetching: false,
  movies: [],
  detailedMovies: [],
  error: null,
}

const HANDLERS = {
  [GET_MOVIES_BY_TITLE]: (state) => ({ ...state, isFetching: true }),
  [`${GET_MOVIES_BY_TITLE}_SUCCESS`]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    movies: payload,
  }),
  [`${GET_MOVIES_BY_TITLE}_ERROR`]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    error: payload,
  }),
  [`${GET_DETAILED_MOVIE_INFO}_SUCCESS`]: (state, { payload }) => {
    const newDetailedMovies = [...state.detailedMovies]
    newDetailedMovies.push(payload)
    return { ...state, detailedMovies: newDetailedMovies }
  },
}

export default createReducer(INITIAL_STATE, HANDLERS)

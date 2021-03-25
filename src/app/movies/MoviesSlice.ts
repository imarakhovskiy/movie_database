import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DetailedMovieDescription } from '../types/movies-types'

interface MoviesState {
  detailedMovies: DetailedMovieDescription[];
} 

const INITIAL_STATE: MoviesState = {
  detailedMovies: [],
}

export default createSlice({ name: "movies", initialState: INITIAL_STATE, reducers: {
  setDetailedMovieInfo: (state: MoviesState, { payload }: PayloadAction<DetailedMovieDescription>) => {
    const newDetailedMovies = [...state.detailedMovies]
    newDetailedMovies.push(payload)
    return { ...state, detailedMovies: newDetailedMovies }
  },
}})

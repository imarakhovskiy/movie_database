import { types } from '@babel/core'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { moviesReducer } from './movies'

const rootReducer = combineReducers({
  movies: moviesReducer,
})

export default configureStore({
  reducer: rootReducer
})

export type SystemState = ReturnType<typeof rootReducer>

import API from 'api'
import actionsCreator from 'helpers/redux/actionsCreator'
import { GET_MOVIES_BY_TITLE, GET_DETAILED_MOVIE_INFO } from './constants'

export const [getMoviesByTitle, getMoviesBySuccess, getMoviesByError] = actionsCreator(
  GET_MOVIES_BY_TITLE,
)
export const [
  getDetailedMovieInfo,
  getDetailedMovieInfoSuccess,
  getDetailedMovieInfoError,
] = actionsCreator(GET_DETAILED_MOVIE_INFO)

export const fetchMoviesByTitle = (dispatch) => (title) => {
  dispatch(getMoviesByTitle())
  return API.get(`s=${title}`)
    .then(({ Search }) => {
      dispatch(getMoviesBySuccess(Search || []))
    })
    .catch((err) => dispatch(getMoviesByError(err)))
}

export const fetchDetailedMovieInfoByImdbId = (dispatch) => (imdbID) => {
  dispatch(getDetailedMovieInfo())
  return API.get(`i=${imdbID}`)
    .then((movie) => {
      dispatch(getDetailedMovieInfoSuccess(movie))
    })
    .catch((err) => dispatch(getDetailedMovieInfoError(err)))
}

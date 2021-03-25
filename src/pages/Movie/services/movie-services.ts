import API from '../../../api'

export const fetchDetailedMovieInfoByImdbId = async (imdbID: string) => {
    const response = await API.get(`i=${imdbID}`)
    return response
  }
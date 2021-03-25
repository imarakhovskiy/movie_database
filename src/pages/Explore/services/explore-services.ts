import API from 'api'

export const fetchMoviesByTitle = async (title: string) => {
    const { Search } = await API.get(`s=${title.trim()}`)
    return Search
  }
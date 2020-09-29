const methodWrapper = (method) => (url, ...arg) =>
  method(
    `${process.env.REACT_APP_OPEN_MOVIE_DATABASE_API_URL}/?apikey=${process.env.REACT_APP_OPEN_MOVIE_DATABASE_API_KEY}&${url}`,
    ...arg,
  ).then((res) => res.json())

const get = methodWrapper((url, params) => fetch(url, { ...params, method: 'GET' }))

export default {
  get,
}

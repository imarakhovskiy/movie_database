import React, { useEffect, useCallback, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useAction from 'hooks/useAction'
import { fetchDetailedMovieInfoByImdbId, detailedMoviesSelector } from 'app/search'
import { GoBack, MovieInfo } from 'components'

export const Movie = () => {
  const { imdbID } = useParams()

  const getDetailedMovieInfoByImdbId = useCallback(
    useAction(fetchDetailedMovieInfoByImdbId),
    [fetchDetailedMovieInfoByImdbId],
  )

  const detailedMovies = useSelector(detailedMoviesSelector)

  useEffect(() => {
    !detailedMovies.find((m) => m.imdbID === imdbID) &&
      getDetailedMovieInfoByImdbId(imdbID)
  }, [])

  const { title, year, runtime, genre, type, plot, imdbRating, poster } = useMemo(
    () => detailedMovies.find((m) => m.imdbID === imdbID) || {},
    [imdbID, detailedMovies],
  )

  return (
    <div className='movie-page'>
      <GoBack className='movie-page__go-back' />
      <MovieInfo {...{ title, year, runtime, genre, type, plot, imdbRating, poster }} />
    </div>
  )
}

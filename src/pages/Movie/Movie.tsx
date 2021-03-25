import { useParams } from 'react-router-dom'
import { GoBack, MovieInfo } from './components'
import { useDetailedMovie } from './services/movie-queries';

import objKeysToLowerCase from 'helpers/objKeysToLowerCase';

import styles from './styles.module.scss'

export const Movie = () => {
  const { imdbID } = useParams<{ imdbID?: string }>()

  const { data, isFetching, isError } = useDetailedMovie(imdbID)

  const movie = data && objKeysToLowerCase(data)

  return (
    <div className={styles.moviePage}>
      <GoBack className={styles.goBack} />
      { !isError && (isFetching ? "Movie fetching..." : movie && <MovieInfo {...movie} />) }
    </div>
  )
}

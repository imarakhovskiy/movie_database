import { useMemo } from 'react';
import { DetailedMovieDescription } from 'app/types/movies-types';

import styles from './styles.module.scss'

export const MovieInfo = ({
  title,
  year,
  runtime,
  genre,
  type,
  plot,
  imdbRating,
  poster,
}: Omit<DetailedMovieDescription, "imdbID">) => {
  const generalInfoItems = useMemo(
    () => [
      { label: 'Runtime: ', value: runtime },
      { label: 'Genre: ', value: genre },
      { label: 'Year: ', value: year },
      { label: 'Type: ', value: type },
    ],
    [year, runtime, genre, type],
  )

  const renderGeneralInfoItems = useMemo(
    () => (
      <ul className={styles.generalInfoList}>
        {generalInfoItems.map(({ label, value }, i) => (
          <li key={i} className={styles.listItem}>
            {label}
            <span className={styles.value}>{value}</span>
          </li>
        ))}
      </ul>
    ),
    [generalInfoItems],
  )

  return (
    <div className={styles.movieInfo}>
      <div className={styles.posterRating}>
        <img src={poster} alt='Movie poster' />
        <p className={styles.rating}>IMDB Rating: {imdbRating} / 10</p>
      </div>
      <div className={styles.titleGeneral}>
        <p className={styles.title}>{title}</p>
        <div className={styles.general}>
          {renderGeneralInfoItems}
          <p className={styles.plot}>{plot}</p>
        </div>
      </div>
    </div>
  )
}

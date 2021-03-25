import { useMemo, useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom'

import { ResultsItem } from './ResultsItem'
import { DETAILED_MOVIES_ROUTE } from 'router'
import { MovieDescription } from 'app/types/movies-types';

import styles from './styles.module.scss'

interface ResultsListProps {
  results: MovieDescription[];
}

export const ResultsList = ({ results }: ResultsListProps) => {
  const history = useHistory()
  const [hoveredMoviePosterUrl, setHoveredMoviePosterUrl] = useState<string | null>(null)

  const renderSearchedMoviesList = useMemo(
    () =>
      results.map(({ title, type, year, imdbID, poster }) => (
        <ResultsItem
          key={imdbID}
          title={title}
          year={year}
          type={type}
          onClick={() => {
            history.push(`${DETAILED_MOVIES_ROUTE}/${imdbID}`)
          }}
          onMouseEnter={() => setHoveredMoviePosterUrl(poster)}
        />
      )),
    [results, history],
  )

  return (
    <div className={styles.container}>
      {hoveredMoviePosterUrl && (
        <img
          src={hoveredMoviePosterUrl}
          alt='Active movie poster'
          className={styles.activeImage}
        />
      )}
      <ul
        className={styles.resultsList}
        data-items-count={8}
        onMouseLeave={() => setHoveredMoviePosterUrl(null)}
      >
        {renderSearchedMoviesList}
      </ul>
    </div>
  )
}
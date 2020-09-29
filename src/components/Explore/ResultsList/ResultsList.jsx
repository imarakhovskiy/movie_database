import React, { useMemo, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { ResultsItem } from './ResultsItem'
import { DETAILED_MOVIES_ROUTE } from 'router'

const ResultsList = ({ results, history }) => {
  const [hoveredMoviePosterUrl, setHoveredMoviePosterUrl] = useState(null)

  const renderSearchedMoviesList = useMemo(
    () =>
      results.map(({ title, type, year, imdbID, poster }, i) => (
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
    <div className='results-list-container'>
      {hoveredMoviePosterUrl && (
        <img
          src={hoveredMoviePosterUrl}
          alt='Active movie poster'
          className='results-list__active-image'
        />
      )}
      <ul
        className='results-list'
        data-items-count={8}
        onMouseLeave={() => setHoveredMoviePosterUrl(null)}
      >
        {renderSearchedMoviesList}
      </ul>
    </div>
  )
}

const WrappedResultsList = withRouter(ResultsList)

export { WrappedResultsList as ResultsList }

import React, { useMemo } from 'react'

export const MovieInfo = ({
  title,
  year,
  runtime,
  genre,
  type,
  plot,
  imdbRating,
  poster,
}) => {
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
      <ul className='general-info-list'>
        {generalInfoItems.map(({ label, value }, i) => (
          <li key={i} className='general-info-list-item'>
            {label}
            <span className='general-info-list-item__value'>{value}</span>
          </li>
        ))}
      </ul>
    ),
    [generalInfoItems],
  )

  return (
    <div className='movie-info'>
      <div className='movie-info__poster-rating'>
        <img src={poster} alt='Movie poster' />
        <p className='movie-info__rating'>IMDB Rating: {imdbRating} / 10</p>
      </div>
      <div className='movie-info__title-general'>
        <p className='movie-info__title'>{title}</p>
        <div className='movie-info__general'>
          {renderGeneralInfoItems}
          <p className='general-info__plot'>{plot}</p>
        </div>
      </div>
    </div>
  )
}

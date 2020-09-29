import React from 'react'

export const ResultsItem = ({ title, type, year, ...props }) => {
  return (
    <li className='results-item' {...props}>
      <p className='results-item__title'>{title}</p>
      <div className='results-item__type-year'>
        <p className='results-item__year'>{year}</p>
        <p>{type}</p>
      </div>
    </li>
  )
}

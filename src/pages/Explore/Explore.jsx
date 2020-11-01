import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Title, UpcomingPoster, ResultsList, SearchInput } from 'components'
import { fetchMoviesByTitle, moviesSelector } from 'app/search'
import useAction from 'hooks/useAction'
import withPagination from 'hoc/withPagination'
import { SESSION_STORAGE_USER_SEARCH } from 'commonConstants'

const RESULT_ITEMS_PER_PAGE = 8

const PaginatedResultsList = withPagination(ResultsList, 'results', RESULT_ITEMS_PER_PAGE)

export const Explore = () => {
  const getMoviesByTitle = useCallback(useAction(fetchMoviesByTitle), [
    fetchMoviesByTitle,
  ])

  useEffect(() => {
    const search = sessionStorage.getItem(SESSION_STORAGE_USER_SEARCH)
    search && getMoviesByTitle(search)
  }, [getMoviesByTitle])

  const searchedMoviesList = useSelector(moviesSelector)

  return (
    <>
      <UpcomingPoster />
      <div className='explore'>
        <Title value='Explore movies & series' className='explore__title' />
        <SearchInput
          onChange={(val) => getMoviesByTitle(val.trim())}
          className='explore__search'
        />
        {searchedMoviesList.length !== 0 && (
          <PaginatedResultsList results={searchedMoviesList} />
        )}
      </div>
    </>
  )
}

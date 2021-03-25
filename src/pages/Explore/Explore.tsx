import { useEffect, useState } from 'react';

import withPagination from 'hoc/withPagination'
import { Title } from 'components'
import { UpcomingPoster, ResultsList, SearchInput } from './components'
import { useMoviesByTitle } from './services/explore-queries';
import { SESSION_STORAGE_USER_SEARCH } from 'commonConstants'

import styles from './styles.module.scss'

// TODO: create middlevare for sessionStorage
// TODO: refactor to exclude search and list to another component

const RESULT_ITEMS_PER_PAGE = 8

const PaginatedResultsList = withPagination(ResultsList, 'results', RESULT_ITEMS_PER_PAGE)

export const Explore = () => {
  const [searchString, setSearchString] = useState('')

  useEffect(() => {
    const search = sessionStorage.getItem(SESSION_STORAGE_USER_SEARCH)
    search && setSearchString(search)
  }, [])

  const { data: searchedMoviesList, isFetching, isError } = useMoviesByTitle(searchString)

  return (
    <>
      <UpcomingPoster />
      <div className={styles.explore}>
        <Title value='Explore movies & series' className={styles.title} />
        <SearchInput
          onChange={(val) => { setSearchString(val as string) }}
          className={styles.search}
        />
        { !isError && (isFetching ? "Movies fetching..." : 
          searchedMoviesList.length !== 0 && <PaginatedResultsList results={searchedMoviesList} />
        )}
      </div>
    </>
  )
}

import React from 'react'
import usePagination from 'hooks/usePagination'
import { Pagination } from 'components'

const withPagination = (Component, paginatedProp, itemsPerPage) => ({ ...props }) => {
  const { next, prev, jump, currentData, currentPage, maxPage, perPage } = usePagination(
    props[paginatedProp],
    itemsPerPage,
  )
  return (
    <>
      <Component {...{ [paginatedProp]: currentData() }} />
      <Pagination {...{ next, prev, jump, currentPage, maxPage, perPage }} />
    </>
  )
}

export default withPagination

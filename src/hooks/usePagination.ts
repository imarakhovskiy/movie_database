import { useState } from 'react'

export interface IUsePagination<DataType> {
  next: () => void;
  prev: () => void;
  jump: (page: number) => void;
  currentData: () => DataType[];
  currentPage: number;
  maxPage: number;
  perPage: number;
}

function usePagination<T = any>(data: any[], itemsPerPage = 10): IUsePagination<T> {
  const [currentPage, setCurrentPage] = useState(1)
  const maxPage = Math.ceil(data.length / itemsPerPage)
  
  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage
    const end = begin + itemsPerPage
    return data.slice(begin, end)
  }

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage))
  }

  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1))
  }

  function jump(page: number) {
    const pageNumber = Math.max(1, page)
    setCurrentPage(() => Math.min(pageNumber, maxPage))
  }

  return { next, prev, jump, currentData, currentPage, maxPage, perPage: itemsPerPage }
}

export default usePagination

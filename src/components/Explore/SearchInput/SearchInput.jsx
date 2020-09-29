import React, { useState, useEffect, useRef } from 'react'
import cn from 'classnames'
import { Input } from 'components'
import { SESSION_STORAGE_USER_SEARCH } from 'commonConstants'

export const SearchInput = ({ className, onChange }) => {
  const inputRef = useRef(0)
  const [userSearch, setUserSearch] = useState('')

  useEffect(() => {
    inputRef.current.focus()
    setUserSearch(sessionStorage.getItem(SESSION_STORAGE_USER_SEARCH))
  }, [])

  return (
    <Input
      ref={inputRef}
      className={cn(className, 'search-input')}
      onChange={(val) => {
        onChange(val)
        sessionStorage.setItem(SESSION_STORAGE_USER_SEARCH, val)
      }}
      placeholder='Search ...'
      value={userSearch}
    />
  )
}

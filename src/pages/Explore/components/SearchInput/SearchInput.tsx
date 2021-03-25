import { useState, useEffect, useRef } from 'react';
import cn from 'classnames'

import { Input, InputProps } from 'components'
import { SESSION_STORAGE_USER_SEARCH } from 'commonConstants'

import styles from './styles.module.scss'

export const SearchInput = ({ className, onChange }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [userSearch, setUserSearch] = useState<string>('')

  useEffect(() => {
    inputRef.current?.focus()
    setUserSearch(sessionStorage.getItem(SESSION_STORAGE_USER_SEARCH) || '')
  }, [])

  return (
    <Input
      ref={inputRef}
      className={cn(styles.searchInput, { [`${className}`]: className })}
      onChange={(val) => {
        onChange && onChange(val)
        sessionStorage.setItem(SESSION_STORAGE_USER_SEARCH, `${val}`)
      }}
      placeholder='Search ...'
      value={userSearch}
    />
  )
}

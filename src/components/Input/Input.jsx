import React, { useCallback, forwardRef, useState, useEffect } from 'react'
import cn from 'classnames'

export const Input = forwardRef(({ className, onChange, value, ...props }, ref) => {
  const [inputValue, setInputValue] = useState(value)
  const onInputChange = useCallback(
    ({ target: { value } }) => {
      onChange(value)
      setInputValue(value)
    },
    [onChange],
  )

  useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <input
      ref={ref}
      className={cn('input', className)}
      onChange={onInputChange}
      value={inputValue}
      {...props}
    />
  )
})

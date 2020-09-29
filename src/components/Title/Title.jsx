import React from 'react'
import cn from 'classnames'

export const Title = ({ value, className, ...props }) => {
  return (
    <h1 className={cn('title', className)} {...props}>
      {value}
    </h1>
  )
}

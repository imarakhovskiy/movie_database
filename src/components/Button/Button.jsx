import React from 'react'
import cn from 'classnames'

export const Button = ({ children, className, onClick, ...props }) => {
  return (
    <button
      className={cn(className, 'button')}
      onClick={(e) => onClick(e.target.value)}
      {...props}
    >
      {children}
    </button>
  )
}

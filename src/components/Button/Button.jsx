import React from 'react'
import cn from 'classnames'

import styles from './styles.module.scss'

export const Button = ({ children, className, onClick, ...props }) => {
  return (
    <button
      className={cn(className, styles.button)}
      onClick={(e) => onClick(e.target.value)}
      {...props}
    >
      {children}
    </button>
  )
}

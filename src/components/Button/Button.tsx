import cn from 'classnames'

import styles from './styles.module.scss'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Button = ({ children, className, onClick, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, { [`${className}`]: className })}
      onClick={(e) => { onClick && onClick(e) }}
      {...props}
    >
      {children}
    </button>
  )
}

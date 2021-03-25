import cn from 'classnames'

import styles from './styles.module.scss'

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  value?: React.ReactNode;
}

export const Title = ({ value, className, ...props }: TitleProps) => {
  return (
    <h1 className={cn(styles.title, { [`${className}`]: className })} {...props}>
      {value}
    </h1>
  )
}

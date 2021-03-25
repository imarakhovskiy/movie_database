import { useState, useEffect, FC } from 'react';
import cn from 'classnames'

import { Button, ButtonProps } from 'components'

import styles from './styles.module.scss'

// TODO refactor component to have render props

interface ButtonGroupProps extends ButtonProps {
  className?: string;
  itemClassName?: string;
  activeItemClassName?: string;
  activeItemId?: string;
  itemsArr: any;
  disabledArr: any;
}

export const ButtonGroup: FC<ButtonGroupProps> = ({
  className,
  itemClassName,
  activeItemClassName,
  activeItemId,
  itemsArr,
  disabledArr = [],
  ...props
}) => {
  const [activeItem, setActiveItem] = useState(itemsArr[0].id || activeItemId)

  useEffect(() => {
    activeItemId && setActiveItem(activeItemId)
  }, [activeItemId])

  return (
    <div className={cn(styles.buttonGroup, className)}>
      {itemsArr.map(({ title, id, onClick }: { title: React.ReactNode, id: string, onClick: () => void }) => (
        <Button
          disabled={disabledArr.includes(id)}
          key={id}
          className={cn(
            styles.buttonGroupItem,
            { [styles.buttonGroupItem_active]: activeItem === id,
              [`${activeItemClassName}`]: activeItem === id,
            },
            itemClassName,
          )}
          onClick={() => {
            setActiveItem(id)
            onClick && onClick()
          }}
          {...props}
        >
          {title}
        </Button>
      ))}
    </div>
  )
}

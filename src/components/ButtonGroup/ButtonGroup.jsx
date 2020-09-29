import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import { Button } from 'components'

export const ButtonGroup = ({
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
    <div className={cn('button-group', className)}>
      {itemsArr.map(({ title, value, id, onClick = () => {} }) => (
        <Button
          disabled={disabledArr.includes(id)}
          key={id}
          className={cn(
            'button-group-item',
            { [`button-group-item_active ${activeItemClassName}`]: activeItem === id },
            itemClassName,
          )}
          onClick={() => {
            setActiveItem(id)
            onClick(value)
          }}
          {...props}
        >
          {title}
        </Button>
      ))}
    </div>
  )
}

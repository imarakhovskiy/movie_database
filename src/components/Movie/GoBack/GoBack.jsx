import React from 'react'
import { withRouter } from 'react-router-dom'
import cn from 'classnames'
import { Button } from 'components'
import { EXPLORE_SCREEN_ROUTE } from 'router'
import { ReactComponent as LeftIcon } from 'assets/icons/arrow-left.svg'

const GoBack = ({ history, className }) => {
  return (
    <div className={cn('go-back', className)}>
      <Button
        className='go-back__button'
        onClick={() => history.push(EXPLORE_SCREEN_ROUTE)}
      >
        <LeftIcon />
      </Button>
      <p className='go-back__text'>Back</p>
    </div>
  )
}

const WrappedGoBack = withRouter(GoBack)

export { WrappedGoBack as GoBack }

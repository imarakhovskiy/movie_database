import { useHistory } from 'react-router-dom'
import cn from 'classnames'

import { Button } from 'components'
import { EXPLORE_SCREEN_ROUTE } from 'router'
import { ReactComponent as LeftIcon } from 'assets/icons/arrow-left.svg'

import styles from './styles.module.scss'

interface GoBackProps {
  className?: string;
}

export const GoBack:React.FC<GoBackProps> = ({ className }) => {
  const history = useHistory()
  return (
    <div className={cn(styles.goBack, { [`${className}`]: className })}>
      <Button
        className={styles.backButton}
        onClick={() => history.push(EXPLORE_SCREEN_ROUTE)}
      >
        <LeftIcon />
      </Button>
      <p className={styles.text}>Back</p>
    </div>
  )
}
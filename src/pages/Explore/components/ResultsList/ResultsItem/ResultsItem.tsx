import { MovieDescription } from 'app/types/movies-types'

import styles from './styles.module.scss'

type ResultsItemProps = Pick<MovieDescription, "title" | "type" | "year"> & React.LiHTMLAttributes<HTMLLIElement>

export const ResultsItem = ({ title, type, year, ...props }: ResultsItemProps) => {
  return (
    <li className={styles.resultsItem} {...props}>
      <p className={styles.title}>{title}</p>
      <div className={styles.typeYear}>
        <p className={styles.year}>{year}</p>
        <p>{type}</p>
      </div>
    </li>
  )
}

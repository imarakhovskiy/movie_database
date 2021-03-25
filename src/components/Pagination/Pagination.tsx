import { useMemo, useState, useEffect } from 'react';

import { ButtonGroup } from 'components'
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg'
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow-left.svg'

import styles from './styles.module.scss'
import { IUsePagination } from 'hooks/usePagination';

const nav_button_construct = (onClick: () => void, id: string, icon: React.ReactNode) => 
  ({ title: icon, id, onClick })

export const Pagination = ({ next, prev, jump, currentPage, maxPage, perPage }:
  Omit<IUsePagination<any>, "currentData">) => {
    const itemsArr = useMemo(
      () => [
        { 
          title: 1,
          id: 1,
          onClick: () => {
            jump(1)
          }
        },
        {
          title: maxPage,
          id: maxPage,
          onClick: () => {
            jump(maxPage)
          },
        },
        nav_button_construct(
          () => {
            prev()
          },
          'prev',
          <ArrowLeft />,
        ),
        nav_button_construct(
          () => {
            next()
          },
          'next',
          <ArrowRight />,
        )
      ], 
      [jump, maxPage, prev, next])
  
  const [activeItemId, setActiveItemId] = useState<number | null>(currentPage)
  const [disabledButtons, setDisabledButtons] = useState<string[]>([])

  useEffect(() => {
    if (currentPage === 1) {
      setActiveItemId(1)
      setDisabledButtons(['prev'])
    } else if (currentPage === maxPage) {
      setActiveItemId(maxPage)
      setDisabledButtons(['next'])
    } else {
      setActiveItemId(null)
      setDisabledButtons([])
    }
  }, [currentPage, maxPage])

  if (maxPage <= 1) return null

  return (
    <div className={styles.pagination}>
      <h3 className={styles.currentPage}>
        Current page: {currentPage} ({(currentPage - 1) * perPage + 1} -{' '}
        {currentPage * perPage})
      </h3>
      <ButtonGroup
        disabledArr={disabledButtons}
        activeItemId={`${activeItemId}`}
        itemsArr={itemsArr}
        itemClassName={styles.paginationButton}
        activeItemClassName={styles.paginationButton_active}
      />
    </div>
  )
}

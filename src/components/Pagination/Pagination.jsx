import React, { useMemo, useState, useEffect } from 'react'
import { ButtonGroup } from 'components'
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg'
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow-left.svg'

const first_button_construct = (onClick) => ({ title: 1, id: 1, onClick })
const last_button_construct = (onClick, maxPage) => ({
  title: maxPage,
  id: maxPage,
  onClick,
})
const nav_button_construct = (onClick, id, icon) => ({ title: icon, id, onClick })

export const Pagination = ({ next, prev, jump, currentPage, maxPage, perPage }) => {
  const first = useMemo(
    () =>
      first_button_construct(() => {
        jump(1)
      }),
    [jump],
  )
  const last = useMemo(
    () =>
      last_button_construct(() => {
        jump(maxPage)
      }, maxPage),
    [jump, maxPage],
  )
  const prevButton = useMemo(
    () =>
      nav_button_construct(
        () => {
          prev()
        },
        'prev',
        <ArrowLeft />,
      ),
    [prev],
  )
  const nextButton = useMemo(
    () =>
      nav_button_construct(
        () => {
          next()
        },
        'next',
        <ArrowRight />,
      ),
    [next],
  )
  const [activeItemId, setActiveItemId] = useState(currentPage)
  const [disabledButtons, setDisabledButtons] = useState([])

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
    <div className='pagination'>
      <h3 className='pagination__current-page'>
        Current page: {currentPage} ({(currentPage - 1) * perPage + 1} -{' '}
        {currentPage * perPage})
      </h3>
      <ButtonGroup
        disabledArr={disabledButtons}
        activeItemId={activeItemId}
        itemsArr={[first, prevButton, nextButton, last]}
        itemClassName='pagination__button'
        activeItemClassName='pagination__button_active'
      />
    </div>
  )
}

// import library
import React, { useEffect, useState } from 'react'
import { fetchCards } from '../../store/cardSlice/cardSlice'
import { Card } from '../cards'

// hooks
import { useAppSelector, useAppDispatch } from '../../hooks/hook'

// import style
import m from '../../style/smallComponents/search.module.scss'
import s from '../../style/pages/componentStyle/view-product.module.scss'

export const Search: React.FC = () => {
  const [search, setSearch] = React.useState<string>('')
  const Searches = useAppSelector(state => state.cardSlice.cards)
  console.log(Searches)

  const dispatch = useAppDispatch()
  useEffect(() => {
    void dispatch(fetchCards())
  }, [])
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const searchProduct = Searches.filter((el: any) => {
    return el.name.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <div className={m.search}>
        <div className={m.search__content}>
        <div className={m.search__input}>
          <input type='text' placeholder='Введите ваш запрос'
          value={search}
          onChange={(e) => handleSearch(e)}/>
          <svg
                          width="15"
                          height="15"
                          viewBox="0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_499_24)">
                            <path
                              d="M19.729 17.9888L25 23.2586L23.2586 25L17.9888 19.729C16.028 21.3009 13.5892 22.1558 11.0761 22.1522C4.9621 22.1522 0 17.1901 0 11.0761C0 4.9621 4.9621 0 11.0761 0C17.1901 0 22.1522 4.9621 22.1522 11.0761C22.1558 13.5892 21.3009 16.028 19.729 17.9888ZM17.2603 17.0757C18.8221 15.4695 19.6944 13.3165 19.6909 11.0761C19.6909 6.31584 15.8351 2.46136 11.0761 2.46136C6.31584 2.46136 2.46136 6.31584 2.46136 11.0761C2.46136 15.8351 6.31584 19.6909 11.0761 19.6909C13.3165 19.6944 15.4695 18.8221 17.0757 17.2603L17.2603 17.0757Z" />
                          </g>
                          <defs>
                            <clipPath id="clip0_499_24">
                              <rect width="15" height="15" />
                            </clipPath>
                          </defs>
                        </svg>
             </div>
        </div>
        <div className={s.card_items}>
        {searchProduct.map((todo, index) => {
          return (
                      <Card
                        key={todo.id}
                        // @ts-ignore
                        todo={todo}
                        index={index}
                        checkHeart={todo.checkHeart}
                      />
          )
        })
        }
          </div>
    </div>
  )
}

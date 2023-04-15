// library
import React, { useEffect, useState } from 'react'

// components
import { Card } from '../../components/cards'
import { GroupedSelect } from '../../components/groupSelect'
import { CustomBreadcrumbs } from '../../components/breadcrumbs'

// hooks
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { fetchCards } from '../../store/cardSlice/cardSlice'
import { fetchCategories } from '../../store/categoriesProductSlice/categoriesSlice'

// styles
import s from '../../style/pages/catalog-page.module.scss'
import { fetchCategoriesSize } from '../../store/categoriesSizeSlice/categoriesSizeSlice'
import { fetchCategoriesColor } from '../../store/categoriesColorSlice/categoriesColorSlice'
import { fetchCategoriesPrice } from '../../store/categoriesPriceSlice/categoriesPriceSlice'

export const Catalog: React.FC = () => {
  const product = useAppSelector(state => state.cardSlice.cards)
  const loading = useAppSelector(state => state.cardSlice.loading)
  const categoriesProduct = useAppSelector(
    state => state.categoriesProductSlice.categories,
  )
  const categoriesLoading = useAppSelector(
    state => state.categoriesProductSlice.loading,
  )

  const dispatch = useAppDispatch()
  useEffect(() => {
    void dispatch(fetchCards())
    void dispatch(fetchCategories())
    void dispatch(fetchCategoriesSize())
    void dispatch(fetchCategoriesColor())
    void dispatch(fetchCategoriesPrice())
  }, [])

  const [categoryId, setCategoryId] = useState<string>(
    '' || '640c7efcbf6b8a1dcb99c581',
  )
  const [priceId, setPriceId] = useState<string>(
    '' || '640cbaa8c382761cf8062be6',
  )
  const [colorId, setColorId] = useState<string>(
    '' || '640cb5e8db43a502f9a65b1e',
  )
  const [sizeName, setSizeName] = useState<string>('' || 'Сбросить')

  const onClickCategory = (id: string) => {
    setCategoryId(id)
  }

  return (
    <div className={s.catalog}>
      <div className={s.catalog_menu}>
        <CustomBreadcrumbs />
      </div>

      <div className={s.wrapper_catalog}>
        <div className={s.sidebar}>
          <div className={s.sidebar_menu}>
            <div className={s.sidebar_title}>Каталог</div>

            <div className={s.card_title}>
              <GroupedSelect
                onClickSize={(name: string) => setSizeName(name)}
                onClickColor={(_id: string) => setColorId(_id)}
                onClickPrice={(_id: string) => setPriceId(_id)}
              />
            </div>
          </div>
          <div className={s.wrapper_sidebar_cards}>
            <div className={s.wrapper_text}>
              <p className={s.sidebar_text}>New</p>
              <p className={s.sidebar_text}>Bestsellers</p>
              {categoriesLoading
                ? (
                <div>Please Wait</div>
                  )
                : (
                    categoriesProduct.map((item, index) => {
                      return (
                    <p
                      key={index}
                      onClick={() => onClickCategory(item._id)}
                      className={s.sidebar_text}
                    >
                      {item.name}
                    </p>
                      )
                    })
                  )}
            </div>
            <div className={s.card_items}>
              {loading ? (
                <div>Please Wait</div>
              ) : (
                product &&
                product
                  .filter(todo => {
                    return (
                      (categoryId === '640c7efcbf6b8a1dcb99c581'
                        ? todo
                        : todo.categoryId === categoryId) &&
                      (sizeName === 'Сбросить'
                        ? todo
                        : todo.sizes.find(item => item.size === sizeName)
                          ?.inStock) &&
                      (priceId !== '640cbaa8c382761cf8062be6'
                        ? todo.priceId === priceId
                        : todo) &&
                      (colorId !== '640cb5e8db43a502f9a65b1e'
                        ? todo.colorId === colorId
                        : todo)
                    )
                  })
                  .map((todo, index) => {
                    return (
                      <Card
                        key={index}
                        todo={todo}
                        index={index}
                        // checkHeart={todo.checkHeart}
                      />
                    )
                  })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

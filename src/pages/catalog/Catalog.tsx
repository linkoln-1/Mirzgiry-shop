// library
import React, { useState } from 'react'

// components
import { Card } from '../../components/cards'
import { GroupedSelect } from '../../components/groupSelect'
import { CustomBreadcrumbs } from '../../components/breadcrumbs'

// hooks
import { useAppSelector } from '../../hooks/hook'

// styles
import s from '../../style/pages/catalog-page.module.scss'

export const Catalog: React.FC = () => {
  const product = useAppSelector(state => state.products)
  const categories = useAppSelector(state => state.categoriesForSidebar)
  const [categoryId, setCategoryId] = useState<number>(0)
  const [priceId, setPriceId] = useState<number>(0)
  const [colorId, setColorId] = useState<number>(0)
  const [sizeId, setSizeId] = useState<number>(0)

  const onClickCategory = (id: number) => {
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
                onClickSize={(id: number) => setSizeId(id)}
                onClickColor={(id: number) => setColorId(id)}
                onClickPrice={(id: number) => setPriceId(id)}
              />
            </div>
          </div>
          <div className={s.wrapper_sidebar_cards}>
            <div className={s.wrapper_text}>
              <p className={s.sidebar_text}>New</p>
              <p className={s.sidebar_text}>Bestsellers</p>
              {categories.map(item => {
                return (
                  <p
                    key={item.id}
                    onClick={() => onClickCategory(item.id)}
                    className={s.sidebar_text}
                  >
                    {item.name}
                  </p>
                )
              })}
            </div>
            <div className={s.card_items}>

              {product && product.filter(todo => {
                return (
                  (categoryId ? todo.categoryId === categoryId : todo) &&
                      (priceId ? todo.priceId === priceId : todo) &&
                      (colorId ? todo.colorId === colorId : todo) &&
                      (sizeId // @ts-ignore
                        ? todo.sizes.find(item => item.id === sizeId).inStock
                        : todo)
                )
              })

                .map((todo, index) => {
                  return (
                      <Card
                        key={todo.id}
                        // @ts-ignore
                        todo={todo}
                        sizeId={sizeId}
                        colorId={colorId}
                        priciId={priceId}
                        categoryId={categoryId}
                        index={index}
                      />
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

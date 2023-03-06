import image1 from '../../assets/image/img1.jpeg'
import image2 from '../../assets/image/img2.jpeg'
import image3 from '../../assets/image/img3.jpeg'
import image4 from '../../assets/image/img4.jpeg'
import image5 from '../../assets/image/img5.png'
import image6 from '../../assets/image/img6.png'
import image7 from '../../assets/image/img7.png'
import { createReducer, createAction } from '@reduxjs/toolkit'

const initialState = {
  products: [
    {
      id: 1,
      categoryId: 1,
      name: 'AL PACINO T-SHIRT',
      categoryIdName: 'Футболка',
      price: 2500,
      priceId: 1,
      color: 'Белый',
      colorId: 2,
      image: `${image1}`,
      sizes: [
        {
          id: 1,
          size: 'S',
          inStock: 0,
          count: 1,
        },
        {
          id: 2,
          size: 'M',
          inStock: 0,
          count: 1,
        },
        {
          id: 3,
          size: 'L',
          inStock: 5,
          count: 1,
        },
        {
          id: 4,
          size: 'XL',
          inStock: 5,
          count: 1,
        },
        {
          id: 5,
          size: 'XXL',
          inStock: 5,
          count: 1,
        },
        {
          id: 6,
          size: '3XL',
          inStock: 5,
          count: 1,
        },
      ],
    },
    {
      id: 2,
      categoryId: 2,
      name: 'PULP FICTION HOODIE',
      categoryIdName: 'Худи',
      price: 4200,
      priceId: 2,
      color: 'Чёрный',
      colorId: 1,
      image: `${image2}`,
      sizes: [
        {
          id: 1,
          size: 'S',
          inStock: 5,
          count: 1,
        },
        {
          id: 2,
          size: 'M',
          inStock: 5,
          count: 1,
        },
        {
          id: 3,
          size: 'L',
          inStock: 0,
          count: 1,
        },
        {
          id: 4,
          size: 'XL',
          inStock: 5,
          count: 1,
        },
        {
          id: 5,
          size: 'XXL',
          inStock: 5,
          count: 1,
        },
        {
          id: 6,
          size: '3XL',
          inStock: 5,
          count: 1,
        },
      ],
    },
    {
      id: 3,
      categoryId: 3,
      name: 'AMARICAN PSYCHO T-SHIRT',
      categoryIdName: 'Футболка с росписью',
      price: 3500,
      priceId: 2,
      color: 'Чёрный',
      colorId: 1,
      image: `${image4}`,
      sizes: [
        {
          id: 1,
          size: 'S',
          inStock: 5,
          count: 1,
        },
        {
          id: 2,
          size: 'M',
          inStock: 5,
          count: 1,
        },
        {
          id: 3,
          size: 'L',
          inStock: 5,
          count: 1,
        },
        {
          id: 4,
          size: 'XL',
          inStock: 5,
          count: 1,
        },
        {
          id: 5,
          size: 'XXL',
          inStock: 5,
          count: 1,
        },
        {
          id: 6,
          size: '3XL',
          inStock: 5,
          count: 1,
        },
      ],
    },
    {
      id: 4,
      categoryId: 4,
      name: 'XXXTENTACION HOODIE',
      categoryIdName: 'Худи с росписью',
      price: 5200,
      priceId: 3,
      color: 'Чёрный',
      colorId: 1,
      image: `${image3}`,
      sizes: [
        {
          id: 1,
          size: 'S',
          inStock: 5,
          count: 1,
        },
        {
          id: 2,
          size: 'M',
          inStock: 5,
          count: 1,
        },
        {
          id: 3,
          size: 'L',
          inStock: 5,
          count: 1,
        },
        {
          id: 4,
          size: 'XL',
          inStock: 5,
          count: 1,
        },
        {
          id: 5,
          size: 'XXL',
          inStock: 5,
          count: 1,
        },
        {
          id: 6,
          size: '3XL',
          inStock: 5,
          count: 1,
        },
      ],
    },
    {
      id: 5,
      categoryId: 1,
      name: 'ANGELINA JOLIE T-SHIRT',
      categoryIdName: 'Футболка',
      price: 2500,
      priceId: 1,
      color: 'Чёрный',
      colorId: 1,
      image: `${image5}`,
      sizes: [
        {
          id: 1,
          size: 'S',
          inStock: 5,
          count: 1,
        },
        {
          id: 2,
          size: 'M',
          inStock: 5,
          count: 1,
        },
        {
          id: 3,
          size: 'L',
          inStock: 5,
          count: 1,
        },
        {
          id: 4,
          size: 'XL',
          inStock: 5,
          count: 1,
        },
        {
          id: 5,
          size: 'XXL',
          inStock: 5,
          count: 1,
        },
        {
          id: 6,
          size: '3XL',
          inStock: 5,
          count: 1,
        },
      ],
    },
    {
      id: 6,
      categoryId: 1,
      name: 'LIFE T-SHIRT',
      categoryIdName: 'Футболка',
      price: 2500,
      priceId: 1,
      color: 'Белый',
      colorId: 2,
      image: `${image6}`,
      sizes: [
        {
          id: 1,
          size: 'S',
          inStock: 5,
          count: 1,
        },
        {
          id: 2,
          size: 'M',
          inStock: 5,
          count: 1,
        },
        {
          id: 3,
          size: 'L',
          inStock: 5,
          count: 1,
        },
        {
          id: 4,
          size: 'XL',
          inStock: 5,
          count: 1,
        },
        {
          id: 5,
          size: 'XXL',
          inStock: 5,
          count: 1,
        },
        {
          id: 6,
          size: '3XL',
          inStock: 5,
          count: 1,
        },
      ],
    },
    {
      id: 7,
      categoryId: 1,
      name: 'FARFALLA T-SHIRT',
      categoryIdName: 'Футболка',
      price: 2500,
      priceId: 1,
      color: 'Белый',
      colorId: 2,
      image: `${image7}`,
      sizes: [
        {
          id: 1,
          size: 'S',
          inStock: 5,
          count: 1,
        },
        {
          id: 2,
          size: 'M',
          inStock: 5,
          count: 1,
        },
        {
          id: 3,
          size: 'L',
          inStock: 5,
          count: 1,
        },
        {
          id: 4,
          size: 'XL',
          inStock: 5,
          count: 1,
        },
        {
          id: 5,
          size: 'XXL',
          inStock: 5,
          count: 1,
        },
        {
          id: 6,
          size: '3XL',
          inStock: 5,
          count: 1,
        },
      ],
    },
  ],

  categoriesForSidebar: [
    {
      id: 1,
      name: 'Футболки',
    },
    {
      id: 2,
      name: 'Худи',
    },
    {
      id: 3,
      name: 'Футболки с росписью',
    },
    {
      id: 4,
      name: 'Худи с росписью',
    },
    {
      id: 0,
      name: 'Все товары',
    },
  ],
  prices: [
    {
      id: 1,
      name: 'От 1000 до 3000',
    },
    {
      id: 2,
      name: 'От 3000 до 5000',
    },
    {
      id: 3,
      name: 'От 5000 до 10000',
    },
    {
      id: 0,
      name: 'Сбросить',
    },
  ],
  colors: [
    {
      id: 1,
      name: 'Черный',
    },
    {
      id: 2,
      name: 'Белый',
    },
    {
      id: 3,
      name: 'Молочный',
    },
    {
      id: 0,
      name: 'Сбросить',
    },
  ],
  dimensions: [
    {
      id: 1,
      name: 'S',
    },
    {
      id: 2,
      name: 'M',
    },
    {
      id: 3,
      name: 'L',
    },
    {
      id: 4,
      name: 'XL',
    },
    {
      id: 5,
      name: 'XXL',
    },
    {
      id: 6,
      name: '3XL',
    },
    {
      id: 0,
      name: 'Сбросить',
    },
  ],

  card: [],
  viewProducts: [],
  basket: [],
  size: [],
  likedProducts: [],
}

export const addToBasket = createAction('addToBasket')
export const add = createAction('addToCard')
export const deleteToBasket = createAction('deleteToBasket')
export const plus = createAction('plus')
export const minus = createAction('minus')
export const todosReducer = createReducer(initialState, builder => {
  builder
    .addCase(add, (state, action) => {
      state.card = [action.payload.card]

      if (!state.viewProducts.some(item => item.id === action.payload.id)) {
        state.viewProducts.unshift(action.payload.card)
      }
      if (state.viewProducts.length > 8) {
        state.viewProducts.pop()
      }
      if (state.likedProducts.length < 4) {
        for (let i = 0; i < 4; i++) {
          const getRandomNumber = () => {
            const number =
              state.products[Math.floor(Math.random() * state.products.length)]
            if (state.likedProducts.includes(number)) return getRandomNumber()
            else {
              state.likedProducts.push(number)
              return number
            }
          }
          getRandomNumber()
        }
      } else {
        return state.likedProducts.action
      }
    })
    .addCase(addToBasket, (state, action) => {
      if (!(state.size.find((item, indexSize) => item === action.payload.size && state.basket.find((item, indexProduct) => item.id === action.payload.id && indexSize === indexProduct)))) {
        state.basket.push(action.payload.product)
        state.size.push(action.payload.size)
      }
    })

    .addCase(deleteToBasket, (state, action) => {
      state.basket = state.basket.filter((item, index) => {
        if (
          item.id === action.payload.id &&
          index === action.payload.indexProduct
        ) { return false }
        return true
      })
      state.size = state.size.filter((item, index) => {
        if (index === action.payload.indexProduct) return false
        return true
      })
    })

    .addCase(plus, (state, action) => {
      // eslint-disable-next-line array-callback-return
      state.basket.map((product, index) => {
        if (action.payload.indexProduct === index) {
          // eslint-disable-next-line no-return-assign
          return product.sizes.map(item => item.count += 1)
        }
      })
    })

    .addCase(minus, (state, action) => {
      // eslint-disable-next-line array-callback-return
      state.basket.map((product, index) => {
        if (action.payload.indexProduct === index) {
          // eslint-disable-next-line no-return-assign
          return product.sizes.map(item => item.count -= 1)
        }
      })
    })
})
export default todosReducer

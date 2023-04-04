import { type ReactNode } from 'react'

export interface CardType {
  id: number
  _id: string
  categoryId: number | string
  name: string
  categoryIdName: string
  price: number
  priceId: string
  color: string
  colorId: string
  image: string
  sizes: Array<{
    _id: string
    size: string
    inStock: number
    count: number
  }>
  indexProduct?: number
  products: Array<{
    _id: string
    categoryId: string
    name: string
    categoryIdName: string
    price: number
    priceId: string
    color: string
    colorId: string
    image: string
    sizes: Array<{
      _id: string
      size: string
      inStock: number
      count: number
    }>
    checkHeart: boolean
  }>
  prices: Array<{
    _id: string
    name: string
  }>
  colors: Array<{
    _id: string
    name: string
  }>
  dimensions: Array<{
    _id: string
    name: string
  }>
  categoriesForSidebar: Array<{
    _id: string
    name: string
  }>
  size: string[] | ReactNode[]
  payment: number
}

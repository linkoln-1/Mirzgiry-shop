import { type ReactNode } from 'react'

export interface CardType {
  id: number
  categoryId: number
  name: string
  categoryIdName: string
  price: number
  priceId: number
  color: string
  colorId: number
  image: string
  sizes: Array<{
    id: number
    size: string
    inStock: number
    count: number
  }>
  indexProduct?: number
  products: Array<{
    id: number
    categoryId: number
    name: string
    categoryIdName: string
    price: number
    priceId: number
    color: string
    colorId: number
    image: string
    sizes: Array<{
      id: number
      size: string
      inStock: number
      count: number
    }>
    checkHeart: boolean
  }>
  prices: Array<{
    id: number
    name: string
  }>
  colors: Array<{
    id: number
    name: string
  }>
  dimensions: Array<{
    id: number
    name: string
  }>
  categoriesForSidebar: Array<{
    id: number
    name: string
  }>
  size: string[] | ReactNode[]
  payment: number
  paymenthistory: number[]
}

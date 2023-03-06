export interface DescriptionType {
  categoryId: number
  categoryIdName: string
  color: string
  colorId: number
  id: number
  image: string
  name: string
  price: number
  priceId: number
  sizes: Array<{
    id: number
    size: string
    inStock: number
    count: number
  }>
  size: string
}

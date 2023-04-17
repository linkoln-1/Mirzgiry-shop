// hooks/useCategories.js
import { useAppSelector } from '../../hooks/hook'

export const useCategories = () => {
  const categoriesProduct = useAppSelector(state => state.categoriesProductSlice.categoriesProduct)
  const categoriesLoading = useAppSelector(state => state.categoriesProductSlice.categoriesLoading)

  return { categoriesProduct, categoriesLoading }
}

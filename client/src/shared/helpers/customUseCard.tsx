// hooks/useCards.js
import { useAppSelector } from '../../hooks/hook'

export const useCards = () => {
  const card = useAppSelector(state => state.cardSlice.cards)
  const loading = useAppSelector(state => state.cardSlice.loading)

  return { card, loading }
}

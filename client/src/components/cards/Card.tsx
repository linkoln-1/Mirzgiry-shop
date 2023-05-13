// library
import React, { useCallback, useState, createContext, useContext } from 'react'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/Favorite';
import { fetchDescriptionCard } from '../../store/descriptionCardSlice/descriptionCardSlice'
import { fetchCards } from '../../store/cardSlice/cardSlice'
import { createFavorite} from '../../store/favoriteSlice/favoriteSlice'
// import { changeProduct} from '../../store/cardSlice/cardSlice'

// hooks
import { useAppDispatch} from '../../hooks/hook'
// import { useState } from 'react';
// constants
import { path } from '../../shared/constants/path'

// styles
import s from '../../style/pages/componentStyle/catalog-card.module.scss'

export interface ITodo {
  _id: string
  categoryId: string
  priceId: string
  colorId: string
  checkHeart: boolean
  sizes: Array<{ size: string, inStock: boolean }>
  image: string
  name: string
  price: number
}

export interface ICardProps {
  todo: ITodo
  index: number
  setSnackbarOpen:any
}

export interface IContextValue {
  handleClickFavorite: (id: string, checkHeart: boolean) => void ;

}

export const CardContext = createContext<IContextValue>({
  handleClickFavorite: () => {},
 
});

const CardComponent: React.FC<ICardProps> = ({ todo, index, setSnackbarOpen}) => {
  const { _id, image, name, price, sizes } = todo
  const [isFavorite, setIsFavorite] = useState<boolean>(todo.checkHeart);
  const dispatch = useAppDispatch()
 
 
  // const handleClickFavorite = useCallback((id: string, checkHeart: boolean) => {
  
  //    void dispatch(changeProduct({ id, checkHeart }));
  // }, [dispatch]);


  const handleClick = useCallback((id: string) => {
    void dispatch(fetchDescriptionCard(id))
    void dispatch(fetchCards())
  }, [])

const handleFavorite = useCallback((id: string)=>{
  setIsFavorite(!isFavorite)
    handleSnackbarOpen();
 void dispatch (createFavorite(id))
},[])

const handleSnackbarOpen = () => {
  setSnackbarOpen(true);
  setTimeout(() => {
    setSnackbarOpen(false);
  }, 1000); 
};

  // const { _id, image, name, price, sizes } = todo
  // const [isFavorite, setIsFavorite] = useState(todo.checkHeart);
  const { handleClickFavorite} = useContext(CardContext);

  return (
    <CardContext.Provider value={{ handleClickFavorite}}>
    <div key={index} className={s.card}>
       <div  onClick={() => {handleFavorite(_id) 
        handleSnackbarOpen();
        }}>
       <svg className={s.favorit}  width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H40V40H20C8.95431 40 0 31.0457 0 20V0Z" fill="black"/>
</svg>

<FavoriteBorderIcon className={s.favorit_icon} sx={{  color: isFavorite ? '#ac2b16':'#fff'}}   onClick={()=>handleClickFavorite(_id, isFavorite)}/>

   </div>
    
      <div className={s.card__image}>
        <Link onClick={() => handleClick(_id)} to="/catalog/card">
          <img src={`${path}/${image}`} alt="" />
        </Link>
      </div>
      <div className={s.card__title}>{name}</div>
      <div className={s.card__price}>{price} ₽</div>
      <div className={s.card__sizes}>
        {sizes.map((item, index) => {
          return <div className={s.card__size} key={index}>{item.size}</div>
        })}
      </div>
      <div className={s.card__colorCircle}>
        <div className={s.white}></div>
        <div className={s.black}></div>
      </div>
   
    </div>
    </CardContext.Provider>
  )
}

export const Card = React.memo(CardComponent)



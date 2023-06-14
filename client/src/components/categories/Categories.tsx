// library
import React, {  type FC } from 'react'

// style
import s from '../../style/pages/componentStyle/categories-common.module.scss'
import { useAppSelector } from '../../hooks/hook'
import { Link} from 'react-router-dom'
import { path } from '../../shared/constants/path'



export const Categories: FC = () => {

const image = useAppSelector((state)=>state.cardSlice.images);
console.log(image);
  return (
    <div className={s.categories__container}>
      <div className={s.categories}>Категории</div>
      <div className={s.categories__wrapper}>
      {image.map((item)=>{
 
return(
    
     
          <div className={s.cards__body} key={item._id}>
            <div className={s.card__img}>
              <img src={`${path}/${item.image}`} alt="" />
            </div>
            <div className={s.cards_button}>
              <Link  to="/catalog">
                 <button
              >{item.categoryIdName}</button>
              </Link>
           
               
           
            
            </div>
          </div>
      
    
) 
       })}
    </div>
    </div>
  )
}

// import library
import React from 'react'

// import img
import arrow from '../../../../assets/icons/arrow.svg'

// import style
import '../../../../style/smallComponents/header-information.scss'

export const Information: React.FC = () => {
  return (
    <div className='background_image'>
      <div className='new_collection'>
        <p className='title_new'>Новая коллекция</p>
        <hr></hr>
        <p className='look'>
          смотреть новинки <img src={arrow} alt='' />
        </p>
      </div>
    </div>
  )
}

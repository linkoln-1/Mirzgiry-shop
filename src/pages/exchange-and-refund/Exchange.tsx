// library
import * as React from 'react'

// components
import { CustomBreadcrumbs } from '../../components/breadcrumbs'

// import style
import s from '../../style/pages/exchange-page.module.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

export const Exchange: React.FC = () => {
  return (
    <div className={s.exchange}>
        <CustomBreadcrumbs />
      <div className={s.exchange__title}>Обмен и возврат</div>
      <div className='exchange__note'>
        Если вам не подошел заказ, мы с удовольствием вам его обменяем или
        примем возврат
      </div>
      <div className={s.exchange__reason}>
        Обмен и возврат возможен в случае :
      </div>
      <div className={s.exchange__container}>
        <div className='exchange__item'>
          <div className={s.exchange__icon}>
            <i className='bi bi-tag'></i>
          </div>
          <div className={s.exchange__description}>
            если заказ не был использован и сохранил товарный вид(в том числе не
            нарушены бирки, ярлыки, упаковочные материалы)
          </div>
        </div>
        <div className='exchange__item'>
          <div className={s.exchange__icon}>
            <i className='bi bi-alarm'></i>
          </div>
          <div className={s.exchange__description}>
            возврат и обмен осуществляется в течение двух дней с момента
            получения заказа
          </div>
        </div>
        <div className='exchange__item'>
          <div className={s.exchange__icon}>
            <i className='bi bi-scooter'></i>
          </div>
          <div className={s.exchange__description}>
            возврат и обмен товара возможен только при отправке по России
          </div>
        </div>
        <div className='exchange__item'>
          <div className={s.exchange__icon}>
            <i className='bi bi-card-checklist'></i>
          </div>
          <div className={s.exchange__description}>
            бланк возврата присутствует в каждой посылке
          </div>
        </div>
        <div className='exchange__item'>
          <div className={s.exchange__icon}>
            <i className='bi bi-currency-exchange'></i>
          </div>
          <div className={s.exchange__description}>
            все расходы по обмену и возврату товара несет покупатель
          </div>
        </div>
        <div className='exchange__item'>
          <div className={s.exchange__icon}>
            <i className='bi bi-cash'></i>
          </div>
          <div className={s.exchange__description}>
            после получения возврата мы делаем перевод денежных средств на карту
            клиента
          </div>
        </div>
      </div>
    </div>
  )
}

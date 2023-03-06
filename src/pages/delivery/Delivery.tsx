// library
import React from 'react'

// components
import { CustomBreadcrumbs } from '../../components/breadcrumbs'

// import style
import s from '../../style/pages/delivery-page.module.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

export const Delivery: React.FC = () => {
  return (
    <div className={s.delivery}>
        <CustomBreadcrumbs />
      <div className={s.delivery__title}>Оплата и доставка</div>
      <div className={s.message__container}>
        <div className={s.payment__container}>
          <div className='message__title'>
            Вы можете оплатить покупку одним из ниже перечисленных способов:
          </div>
          <ul>
            <li>наложенным платежом в отделении Новой Почты</li>
            <li>денежным переводом Visa/MasterCard</li>
            <li>полная предоплата через Приват 24</li>
          </ul>
        </div>
        <div className={s.delivery__container}>
          <div className='message__title'>
            Мы готовы предложить несколько вариантов доставки:
          </div>
          <ul>
            <li>отправка по всей Украине в отделение Новой Почты(1-2 дня)</li>
            <li>
              международные сервисы доставки для жителей зарубежья: Укрпочта(
              1-3 недели ,DHL(3-7 дней)
            </li>
            <li>Срок доставки: 1–2 дня с момента заказа</li>
          </ul>
        </div>
      </div>
      <div className='payment__process'>
        <div className='payment__process__title'>
          Процесс оформления заказа с помощью LIQPAY:
        </div>
        <div className={s.payment__process__container}>
          <div className={s.payment__process__item}>
            <div className={s.payment__process__icon}>
              <i
                className={`bi bi-caret-right-fill ${s.payment__process__icon_red}`}
              >
                <div className={s.payment__process__number}>01</div>
                <i
                  className={`bi bi-chevron-right ${s.payment__process__icon_arrow}`}
                ></i>
              </i>
            </div>
            <div className='payment__process__text'>
              Выбрать в корзине способ оплаты LIQ-PAY
            </div>
          </div>
          <div
            className={`${s.payment__process__item}  ${s.payment__process__item_second}`}
          >
            <div className={s.payment__process__icon}>
              <i
                className={`bi bi-caret-right-fill ${s.payment__process__icon_red}`}
              >
                <div className={s.payment__process__number}>02</div>
                <i
                  className={`bi bi-chevron-right ${s.payment__process__icon_arrow}`}
                ></i>
              </i>
            </div>
            <div className='payment__process__text'>Подтвердить заказ;</div>
          </div>
          <div
            className={`${s.payment__process__item}  ${s.payment__process__item_third}`}
          >
            <div className={s.payment__process__icon}>
              <i
                className={`bi bi-caret-right-fill ${s.payment__process__icon_red}`}
              >
                <div className={s.payment__process__number}>03</div>
                <i
                  className={`bi bi-chevron-right ${s.payment__process__icon_arrow}`}
                ></i>
              </i>
            </div>
            <div className='payment__process__text'>
              После этого Вас перенаправит на сайт LIQPAY, где вы выбираете
              удобный для вас способ оплаты: через Приват24, или с помощью карты
              Mastercard/VISA со всего мира.{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

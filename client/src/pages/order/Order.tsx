import React from 'react'

// styles
import s from '../../style/pages/order.module.scss'

interface OrderProps {
    totalPrice: number
  }
export const Order: React.FC<OrderProps> = ({totalPrice}) => {
  
  return (
        <div className={s.order}>
            <div className={s.order__decor}>Оформление заказа</div>
            <form className={s.order__personal__information}>
                <div className={s.order__wrapper__personal__information}>
                     <p>Персональные данные:</p>
            <div className={s.order__wrapper__input}>
            <input type="input" name="title" value="Ваше имя*" />
            <input type="input" name="title" value="Ваша фамилия*"/>
            </div>
            <div className={s.order__wrapper__input}>
            <input type="input" name="title" value="Ваш e-mail*" />
            <input type="input" name="title" value="Ваш телефон*"/>
            </div>
            <p className={s.order__delivery}>Способ доставки:</p>
            <div className={s.order__wrapper}>
            <div className={s.order__wrapper__radio}>
            <p>По России:</p>
            <div>
            <input id="ln" type="radio" name="title" />
            <label htmlFor="ln">Самовывоз - вул. Большая Васильковская 14(м. Льва Толстого)</label>
            </div>
            <div>
            <input id="n" type="radio" name="titlhyyye" />
            <label htmlFor="n">Новая Почта</label>
            </div>
            </div>
            <div className={s.order__wrapper__radio}>
            <p>Международная доставка:</p>
            <div>
            <input id="m" type="radio" name="title" />
            <label htmlFor="m">Украпочта / 1-3 недели / 30$</label>
            </div>
            <div>
            <input id="d" type="radio" name="titlhyyye" />
            <label htmlFor="d">DHL / 3-7 дней / 60$</label>
            </div>
            </div>
            </div>
            <p className={s.bonus}>Адрес доставки:</p>
            <div className={s.order__wrapper__input}>
            <input type="input" name="title" value="Город*" />
            <input type="input" name="title" value="Отделение почты*"/>
            </div>
            <p className={s.bonus}>Вы можете оплатить покупку одним из ниже перечисленных способов:</p>
            <div className={s.order__wrapper}>
            <div className={s.order__wrapper__radio}>
            <div>
            <input id="m" type="radio" name="title" />
            <label htmlFor="m">Украпочта / 1-3 недели / 30$</label>
            </div>
            <div>
            <input id="d" type="radio" name="titlhyyye" />
            <label htmlFor="d">DHL / 3-7 дней / 60$</label>
            </div>
            </div>
            <div className={s.order__wrapper__radio}>
            <div>
            <input id="m" type="radio" name="title" />
            <label htmlFor="m">Денежным переводом  Visa/MasterCard</label>
            </div>
            </div>
            </div>
            <p className={s.bonus}>Использование бонусного счёта:</p>
            <input className={s.order__bonus}type="input" name="title" value="Сумма списания бонусов*" />
                </div>
               <div className={s.order__wrapper__decor}>
               <div className={s.order__decor__welcome}>Войти в личный кабинет</div>
               <div className={s.order__decor__conditions}>УСЛОВИЯ ДОСТАВКИ</div>
               <div className={s.order__decor__conditions}>УСЛОВИЯ ОБМЕНА И ВОЗВРАТА</div>
               <div className={s.order__decor__information}>ИНФОРМАЦИЯ ОБ ОПЛАТЕ</div>
               <div className={s.order__decor}>
              <div className={s.order__decor__delivery}>
                <div>ДОСТАВКА:</div><div className={s.order__bold}>По тарифам перевозчика</div>
              </div>
              <div className={s.order__decor__bonus}>
              <div>БОНУСЫ:</div><div className={s.order__bold}>-69 грн</div>
              </div>
              <div className={s.order__decor__total}>
              <div>ИТОГО:</div><div className={s.order__bold}>{totalPrice} ₽</div>
              </div>
               <button>ОФОРМИТЬ ЗАКАЗ</button>
               <div className={s.order__consent}>Нажимая на кнопку «оплатить заказ», я принимаю условия публичной оферты и политики конфиденциальности</div>
               </div>
               </div>
            </form>
        </div>
  )
}

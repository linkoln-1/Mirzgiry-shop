// import library
import React from 'react'

// import component
import { NavLink } from 'react-router-dom'

// interfaces
import { type IFooterProps } from '../../../shared/interfaces/commonProps'

// import style
import s from '../../../style/pages/componentStyle/footer-common.module.scss'

export const Footer: React.FC<IFooterProps> = ({ setColorPlace }) => {
  return (
    <>
      <div className={s.footer}>
        <div className={s.footer_wrapper}>
          <div className={s.footer_content}>
            <div className={s.bold}>
              <p>КОМПАНИЯ</p>
              <div>О нас</div>
              <div>Контакты</div>
            </div>
            <div className={s.bold}>
              <p>ПОЛЕЗНОЕ</p>
              <div>
                <NavLink
                  className={s.link}
                  to={'/delivery'}
                  onClick={() => setColorPlace(true)}
                >
                  Оплата и доставка
                </NavLink>
              </div>
              <div>
                <NavLink
                  className={s.link}
                  to={'/exchange'}
                  onClick={() => setColorPlace(true)}
                >
                  Условия возврата
                </NavLink>
              </div>
              <div>Бонусная система</div>
            </div>
            <div className={s.bold}>
              <p>ПОКУПАТЕЛЮ</p>
              <div>Избранное</div>
              <div>Публичная оферта</div>
              <div>Политика конфиденциальности</div>
            </div>
            <div className={s.bold}>
              <p>КОНТАКТЫ</p>
              <div></div>
              <div>+38(073) 096 36 44</div>
              <div>info@yanki.com</div>
            </div>
          </div>
        </div>
        <div className={s.footer_rezerved}>
          ©️ 2021 Mirzgiry. All rights reserved
        </div>
      </div>
    </>
  )
}

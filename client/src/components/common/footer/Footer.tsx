// Footer.tsx
import React from 'react'
import { NavLink } from 'react-router-dom'
import { type IFooterProps } from '../../../shared/interfaces/commonProps'
import s from '../../../style/pages/componentStyle/footer-common.module.scss'
import { FooterSection } from './FooterSection'

export const Footer: React.FC<IFooterProps> = ({ setColorPlace }) => {
  return (
    <>
      <div className={s.footer}>
        <div className={s.footer_wrapper}>
          <div className={s.footer_content}>
            <FooterSection
              title="КОМПАНИЯ"
              items={['О нас', 'Контакты']}
            />
            <FooterSection
              title="ПОЛЕЗНОЕ"
              items={[
                <NavLink
                  className={s.link}
                  to={'/delivery'}
                  onClick={() => setColorPlace(true)}
                >
                  Оплата и доставка
                </NavLink>,
                <NavLink
                  className={s.link}
                  to={'/exchange'}
                  onClick={() => setColorPlace(true)}
                >
                  Условия возврата
                </NavLink>,
                'Бонусная система',
              ]}
            />
            <FooterSection
              title="ПОКУПАТЕЛЮ"
              items={[
                'Избранное',
                'Публичная оферта',
                'Политика конфиденциальности',
              ]}
            />
            <FooterSection
              title="КОНТАКТЫ"
              items={['', '+38(073) 096 36 44', 'info@yanki.com']}
            />
          </div>
        </div>
        <div className={s.footer_rezerved}>
          ©️ 2021 Mirzgiry. All rights reserved
        </div>
      </div>
    </>
  )
}

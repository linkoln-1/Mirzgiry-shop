import React, { type FC } from 'react'

import { type IHeaderProps } from '../../../shared/interfaces/commonProps'
import s from '../../../style/pages/componentStyle/header-common.module.scss'
import CustomNavLink from './CustomNavLink'

const Icon = ({ colorPlace, iconClass, children }: IHeaderProps) => (
  <div className={colorPlace ? `${s.iconblack}` : iconClass}>{children}</div>
)


export const Header: FC<IHeaderProps> = ({ colorPlace, onClick }) => (

  <>
    <header>
      <div className={s.header__container}>
        <div className={s.header_sidebar}>
          <Icon colorPlace={colorPlace} iconClass={s.icon}>
            <svg
              width="34"
              height="24"
              viewBox="0 0 34 24"
              className={colorPlace ? `${s.iconblack}` : `${s.icon}`}>
              <rect width="34" height="4" />
              <rect y="10" width="26" height="4" />
              <rect y="20" width="18" height="4" />
            </svg>
          </Icon>
          <div className={s.header_navigation}>

            <CustomNavLink colorPlace={colorPlace} to="/new" onClick={onClick}>
                NEW
            </CustomNavLink>
            <CustomNavLink colorPlace={colorPlace} to="/catalog" onClick={onClick}>
              КАТАЛОГ
            </CustomNavLink>
            <CustomNavLink colorPlace={colorPlace} to="/about" onClick={onClick}>
              О НАС
            </CustomNavLink>
          </div>
        </div>
        <div className={s.header_logo_language}>
          <div className={s.header_logo}>
            <CustomNavLink colorPlace={colorPlace} to="/" onClick={onClick}>
              Mirzgiry
            </CustomNavLink>
          </div>
          <div className={s.header_language}>
            <div>RU</div>
            <div>EN</div>
          </div>
        </div>
        <div className={s.header_functional}>
          <Icon colorPlace={colorPlace} iconClass={s.icon}>
            <CustomNavLink colorPlace={colorPlace} to="/search" onClick={onClick}>
              <svg
                className={colorPlace ? `${s.iconblack}` : `${s.icon}`}
                width="25"
                height="25"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_499_24)">
                  <path d="M19.729 17.9888L25 23.2586L23.2586 25L17.9888 19.729C16.028 21.3009 13.5892 22.1558 11.0761 22.1522C4.9621 22.1522 0 17.1901 0 11.0761C0 4.9621 4.9621 0 11.0761 0C17.1901 0 22.1522 4.9621 22.1522 11.0761C22.1558 13.5892 21.3009 16.028 19.729 17.9888ZM17.2603 17.0757C18.8221 15.4695 19.6944 13.3165 19.6909 11.0761C19.6909 6.31584 15.8351 2.46136 11.0761 2.46136C6.31584 2.46136 2.46136 6.31584 2.46136 11.0761C2.46136 15.8351 6.31584 19.6909 11.0761 19.6909C13.3165 19.6944 15.4695 18.8221 17.0757 17.2603L17.2603 17.0757Z" />
                </g>
                <defs>
                  <clipPath id="clip0_499_24">
                    <rect width="25" height="25" />
                  </clipPath>
                </defs>
              </svg>
            </CustomNavLink>
          </Icon>
          <Icon colorPlace={colorPlace}>
            <CustomNavLink colorPlace={colorPlace}   to={`${localStorage.getItem('token') ? '/personal' : '/authorization'}`} onClick={onClick}>
              <svg
                className={colorPlace ? `${s.iconblack}` : `${s.icon}`}
                width="20"
                height="25"
                viewBox="0 0 20 25"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 25C0.5 22.4741 1.5034 20.0517 3.28946 18.2656C5.07552 16.4796 7.49794 15.4762 10.0238 15.4762C12.5497 15.4762 14.9721 16.4796 16.7582 18.2656C18.5442 20.0517 19.5476 22.4741 19.5476 25H17.1667C17.1667 23.1056 16.4141 21.2888 15.0746 19.9492C13.735 18.6097 11.9182 17.8571 10.0238 17.8571C8.1294 17.8571 6.31259 18.6097 4.97305 19.9492C3.6335 21.2888 2.88095 23.1056 2.88095 25H0.5ZM10.0238 14.2857C6.07738 14.2857 2.88095 11.0893 2.88095 7.14286C2.88095 3.19643 6.07738 0 10.0238 0C13.9702 0 17.1667 3.19643 17.1667 7.14286C17.1667 11.0893 13.9702 14.2857 10.0238 14.2857ZM10.0238 11.9048C12.6548 11.9048 14.7857 9.77381 14.7857 7.14286C14.7857 4.5119 12.6548 2.38095 10.0238 2.38095C7.39286 2.38095 5.2619 4.5119 5.2619 7.14286C5.2619 9.77381 7.39286 11.9048 10.0238 11.9048Z" />
              </svg>
            </CustomNavLink>
          </Icon>
          <Icon colorPlace={colorPlace}>
            <CustomNavLink colorPlace={colorPlace} to="/favorite" onClick={onClick}>
              <svg
                className={colorPlace ? `${s.iconblack}` : `${s.icon}`}
                width="25"
                height="24"
                viewBox="0 0 25 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.501 2.16119C15.4372 -0.475012 19.9746 -0.387513 22.8033 2.44618C25.6308 5.28113 25.7283 9.79605 23.0983 12.741L12.4985 23.3558L1.90122 12.741C-0.728729 9.79605 -0.62998 5.27363 2.19622 2.44618C5.02741 -0.383763 9.55608 -0.478762 12.501 2.16119ZM21.0334 4.2124C19.1584 2.33494 16.1335 2.25869 14.171 4.02115L12.5023 5.51863L10.8323 4.0224C8.86359 2.25744 5.8449 2.33494 3.96493 4.2149C2.10247 6.07737 2.00872 9.05856 3.72494 11.0285L12.4998 19.8171L21.2746 11.0298C22.9921 9.05856 22.8983 6.08112 21.0334 4.2124Z" />
              </svg>
            </CustomNavLink>
          </Icon>
          <Icon colorPlace={colorPlace}>
            <CustomNavLink colorPlace={colorPlace} to="/basket" onClick={onClick}>
              <svg
                className={colorPlace ? `${s.iconblack}` : `${s.icon}`}
                width="25"
                height="25"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.81655 5.48063L0 1.66525L1.66525 0L5.48063 3.81655H23.4183C23.6017 3.81654 23.7826 3.85941 23.9466 3.94173C24.1105 4.02406 24.2529 4.14356 24.3624 4.2907C24.4719 4.43785 24.5456 4.60856 24.5774 4.78921C24.6092 4.96986 24.5984 5.15545 24.5457 5.33117L21.7213 14.746C21.6486 14.9886 21.4997 15.2012 21.2966 15.3524C21.0935 15.5035 20.847 15.5852 20.5938 15.5851H6.17027V17.9389H19.1157V20.2926H4.99341C4.68129 20.2926 4.38195 20.1686 4.16125 19.9479C3.94054 19.7272 3.81655 19.4278 3.81655 19.1157V5.48063ZM6.17027 6.17027V13.2314H19.7183L21.8366 6.17027H6.17027ZM5.58184 25C5.11366 25 4.66465 24.814 4.33359 24.483C4.00254 24.1519 3.81655 23.7029 3.81655 23.2347C3.81655 22.7665 4.00254 22.3175 4.33359 21.9865C4.66465 21.6554 5.11366 21.4694 5.58184 21.4694C6.05002 21.4694 6.49903 21.6554 6.83009 21.9865C7.16114 22.3175 7.34713 22.7665 7.34713 23.2347C7.34713 23.7029 7.16114 24.1519 6.83009 24.483C6.49903 24.814 6.05002 25 5.58184 25ZM19.7041 25C19.236 25 18.7869 24.814 18.4559 24.483C18.1248 24.1519 17.9388 23.7029 17.9388 23.2347C17.9388 22.7665 18.1248 22.3175 18.4559 21.9865C18.7869 21.6554 19.236 21.4694 19.7041 21.4694C20.1723 21.4694 20.6213 21.6554 20.9524 21.9865C21.2834 22.3175 21.4694 22.7665 21.4694 23.2347C21.4694 23.7029 21.2834 24.1519 20.9524 24.483C20.6213 24.814 20.1723 25 19.7041 25Z" />
              </svg>
            </CustomNavLink>
          </Icon>
        </div>
      </div>
    </header>
  </>
)

// library
import React from 'react'
import { Breadcrumbs, Link, Stack } from '@mui/material'
import { useLocation } from 'react-router-dom'
import classnames from 'classnames'

// path constants
import { BreadcrumbsRoute } from '../../shared/constants/breadcrumbs-route'

// styles
import s from '../../style/smallComponents/breadcrumbs-component.module.scss'

export const CustomBreadcrumbs = () => {
  const router = useLocation()
  const path = router.pathname.split('/').slice(1)

  return (
    <Stack className={s.wrapper} spacing={2}>
      <Breadcrumbs className={s.nav} separator={'/'} aria-label='breadcrumb'>
        {path.map((crumb, index) => {
      
          const { label } = BreadcrumbsRoute.find(({ link }) => link === crumb) ?? {}
          return (
            <Link
              className={classnames(s.breadcrumb, {
                [s.active]: index === path.length - 1,
              })}
              href={`/${path.slice(0, index).join('/')}`}
              key={crumb}
            >
              {label}
            </Link>
          )
        })}
      </Breadcrumbs>
    </Stack>
  )
}

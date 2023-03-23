// library
import React from 'react'
import { Breadcrumbs, Link, Stack } from '@mui/material'
import { useLocation } from 'react-router-dom'
import cn from 'classnames'

// path constants
import { RouteConstant } from '../../shared/constants/Route-Constant'

// styles
import s from '../../style/smallComponents/breadcrumbs-component.module.scss'

export const CustomBreadcrumbs = () => {
  const router = useLocation()
  const path = router.pathname.split('/')
  const newPath = path.slice(1)
  const routePath = path.slice()

  return (
    <Stack className={s.wrapper} spacing={2}>
      <Breadcrumbs className={s.nav} separator={'/'} aria-label='breadcrumb'>
        {path.map((crumb, index) => (
          <Link
            className={cn(s.breadcrumb, {
              [s.active]: index === path.length - 1,
            })}
            href={`/${newPath.slice(0, routePath.indexOf(crumb)).join('/')}`}
            key={index}
          >
            {RouteConstant.find(path => path.link === crumb)?.label}
          </Link>
        ))}
      </Breadcrumbs>
    </Stack>
  )
}

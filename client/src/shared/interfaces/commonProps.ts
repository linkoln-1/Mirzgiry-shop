import { type ReactNode } from 'react'

export interface IHeaderProps { 
  colorPlace: boolean
  onClick?: (a: boolean) => void 
  to?: string
  iconClass?: string
  children?: ReactNode
  className?: string
 

}

export interface IFooterProps {
  setColorPlace: (a: boolean) => void
  className?: string
}

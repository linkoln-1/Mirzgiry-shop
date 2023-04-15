// library
import React, { useState } from 'react'

// components
import { Header } from '../header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../footer'

interface ILayoutProps {
  headerClassName?: string
  footerClassName?: string
}

export const Layout: React.FC<ILayoutProps> = ({
  headerClassName,
  footerClassName,
}) => {
  const [colorPlace, setColorPlace] = useState<boolean>(false)

  const handleColorPlaceChange = (value: boolean) => {
    setColorPlace(value)
  }

  return (
    <>
      <Header
        colorPlace={colorPlace}
        onClick={handleColorPlaceChange}
        className={headerClassName}
      />
      <div className="content_top">
        <Outlet />
      </div>
      <Footer
        setColorPlace={handleColorPlaceChange}
        className={footerClassName}
      />
    </>
  )
}

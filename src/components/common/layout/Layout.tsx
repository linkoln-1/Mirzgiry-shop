// library
import React, { useState } from 'react'

// components
import { Header } from '../header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../footer'

export const Layout: React.FC = () => {
  const [colorPlace, setColorPlace] = useState<boolean>(false)
  return (
    <>
      <Header colorPlace={colorPlace} setColorPlace={a => setColorPlace(a)} />
      <div className="content_top">
        <Outlet />
      </div>
      <Footer setColorPlace={a => setColorPlace(a)} />
    </>
  )
}

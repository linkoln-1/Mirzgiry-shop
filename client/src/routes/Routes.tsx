// library
import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from '../shared/constants/route-app-config'
// components
import { Layout } from '../components/common/layout/Layout'

export const RoutesPath: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
            {routeConfig.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
                index={route.isIndex}
              />
            ))}
        </Route>
    </Routes>
  )
}

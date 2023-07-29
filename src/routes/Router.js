import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import NavPage from '../pages/NavPage'
import HomePage from '../pages/HomePage'
import ExplorePage from '../pages/ExplorePage'

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/MainPage' element={<NavPage />}>
          <Route index element={<HomePage />}/>
          </Route>
        <Route path='/ExplorePage' element={<NavPage />}>
          <Route index element={<ExplorePage />}/>
        </Route>
        </Routes>
    </div>
  )
}

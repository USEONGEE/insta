import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import NavPage from '../pages/NavPage'
import HomePage from '../pages/HomePage'

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/MainPage/*' element={<NavPage />}>
          <Route index element={<HomePage />}/> 
        </Route>
      </Routes>
    </div>
  )
}

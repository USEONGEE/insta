import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import NavPage from '../pages/NavPage'
import HomePage from '../pages/HomePage'
import Explore from '../components/Explore/Explore'
export default function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/MainPage/*' element={<NavPage />}>
          <Route path="/Explore" element = {Explore}/>
          <Route index element={<HomePage />}/>
        </Route>
      </Routes>
    </div>
  )
}

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import NavPage from '../pages/NavPage'
import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/' element={<NavPage />}>
          <Route index element={<HomePage />}/> 
          <Route path='/id' element={<ProfilePage/>} >
            
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

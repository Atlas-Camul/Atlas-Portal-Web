import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import UserManagement from './pages/UserManagement'
import Settings from './pages/Settings'
import SignIn from './pages/Authentication/SignIn'
import SignUp from './pages/Authentication/SignUp'

const App = () => {
  const [loading, setLoading] = useState(true)

  const preloader = document.getElementById('preloader')

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = 'none'
      setLoading(false)
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    !loading && (
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user-management' element={<UserManagement />} />
          <Route path='/beacon-management' element={<UserManagement />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/auth/signin' element={<SignIn />} />
          <Route path='/auth/signup' element={<SignUp />} />
        </Routes>
      </>
    )
  )
}

export default App

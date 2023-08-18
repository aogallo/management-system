import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import Users from '@pages/Users'
import Dashboard from '@pages/Dashboard'
import Reports from '@pages/Reports'
import Settings from '@pages/Settings'
import NoMatchRouteError from '@pages/NoMatchRouteError'
import TratamientPlan from '@pages/TratamientPlan'
import Customers from '@pages/Customers'
import { useUserLogged } from '@hooks/useLogin'
import { useEffect } from 'react'

const Layout = () => {
  const isLogged = useUserLogged()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogged) {
      navigate('/login')
    }
  }, [isLogged])

  return (
    <>
      {isLogged ? (
        <main className='main'>
          <Routes>
            <Route path='/users' element={<Users />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/tratamient-plan' element={<TratamientPlan />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/*' element={<NoMatchRouteError />} />
          </Routes>
        </main>
      ) : (
        <Navigate to='/login' />
      )}
    </>
  )
}

export default Layout

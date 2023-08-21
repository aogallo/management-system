import { Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Layout from '@components/Layout'
import Login from '@pages/Login'
import RequiredAuth from '@components/RequiredAuth'
import Users from '@pages/Users'
import Dashboard from '@pages/Dashboard'
import TratamientPlan from '@pages/TratamientPlan'
import Reports from '@pages/Reports'
import Settings from '@pages/Settings'
import Customers from '@pages/Customers'
import NoMatchRouteError from '@pages/NoMatchRouteError'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<Layout />}></Route>
        <Route path='login' element={<Login />} />
        <Route element={<RequiredAuth />}>
          <Route path='/users' element={<Users />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/tratamient-plan' element={<TratamientPlan />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/*' element={<NoMatchRouteError />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  )
}

export default App

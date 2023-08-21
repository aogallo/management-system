import useAuth from '@hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'

export default function RequiredAuth() {
  const { isLogged } = useAuth()
  console.log('isLogged', isLogged)
  return isLogged ? <Outlet /> : <Navigate to='/login' />
}

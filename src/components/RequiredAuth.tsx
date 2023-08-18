import { Navigate } from 'react-router-dom'

export default function RequiredAuth({
  children,
}: {
  children: React.ReactNode
}) {
  const token = window.localStorage.getItem('user')
  console.log('token desde ruta privada', token)
  return token ? children : <Navigate to='/login' />
}

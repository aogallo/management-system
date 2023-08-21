import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
const Layout = () => {
  return (
    <>
      <main className='main'>
        <Header />
        <Sidebar />
        <Outlet />
      </main>
    </>
  )
}

export default Layout

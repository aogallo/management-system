import { ReactNode } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

export const MainContent = ({ children }: { children: ReactNode }) => {
  return (
    <div className='main-content'>
      <Header />
      <Sidebar />
      <main className='main'>{children}</main>
    </div>
  )
}

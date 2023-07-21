import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Layout from './components/Layout'
import Sidebar from './components/Sidebar'
import Table from './components/Table'
import Login from './pages/Login'

function RequiredAuth({ children }: { children: React.ReactNode }) {
  return children
}

function App() {
  return (
    <div className='body'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route
          path='/*'
          element={
            <RequiredAuth>
              <Header />
              <Sidebar />
              <Layout />
            </RequiredAuth>
          }
        />
      </Routes>
    </div>
  )
}

export default App

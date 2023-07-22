import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Layout from './components/Layout'
import Sidebar from './components/Sidebar'
import Login from './pages/Login'

function RequiredAuth({ children }: { children: React.ReactNode }) {
  return children
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route
        path='/*'
        element={
          <RequiredAuth>
            <div className='main-content'>
              <Header />
              <Sidebar />
              <Layout />
            </div>
          </RequiredAuth>
        }
      />
    </Routes>
  )
}

export default App

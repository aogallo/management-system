import { Navigate, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Header from '@components/Header'
import Layout from '@components/Layout'
import Sidebar from '@components/Sidebar'
import Login from '@pages/Login'
import RequiredAuth from '@components/RequiredAuth'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/login' element={<Login />} />
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
    </QueryClientProvider>
  )
}

export default App

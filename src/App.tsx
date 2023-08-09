import { Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Header from '.@components/Header'
import Layout from '.@components/Layout'
import Sidebar from '@components/Sidebar'
import Login from '@pages/Login'

const queryClient = new QueryClient()

function RequiredAuth({ children }: { children: React.ReactNode }) {
  return children
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  )
}

export default App

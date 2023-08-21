import { AppContextType, GlobalContextType } from '@src/types'
import React, { createContext, useState } from 'react'

const AppContext = createContext<GlobalContextType>({
  user: {
    token: '',
    username: '',
    name: '',
  },
  isLogged: false,
  addAuth: (user) => console.log(user),
  logOut: () => console.log('logout'),
})

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [auth, setAuth] = useState<AppContextType>({
    user: {
      token: '',
      username: '',
      name: '',
    },
    isLogged: false,
  })

  const logOut = () => {
    setAuth({
      user: {
        token: '',
        username: '',
        name: '',
      },
      isLogged: false,
    })
    window.localStorage.removeItem('user')
  }

  return (
    <AppContext.Provider value={{ ...auth, addAuth: setAuth, logOut }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext

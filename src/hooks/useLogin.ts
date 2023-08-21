import { logIn } from '@services/login'
import { LoginType } from '@src/types'
import { useMutation } from '@tanstack/react-query'

export const useLogin = ({ username, password }: LoginType) => {
  const {
    isLoading,
    isError,
    isSuccess,
    mutate: login,
  } = useMutation(() => logIn({ username, password }))

  return { isLoading, isError, isSuccess, login }
}

export const useUserLogged = () => {
  const token = window.localStorage.getItem('user')
  console.log('token hook', token)
  return token ? true : false
}

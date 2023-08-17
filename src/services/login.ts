import { LoginType, ResponseAPI } from '@src/types'

const baseUrl = `${import.meta.env.VITE_API}/login`

export const logIn = async (login: LoginType) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(login),
  })

  return (await response.json()) as ResponseAPI
}

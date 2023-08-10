import { ResponseAPI } from '@src/types'

const baseUrl = `${import.meta.env.VITE_API}/customer`

export const getCustomer = async (id = '') => {
  const URL = `${baseUrl}/${id}`

  const response = await fetch(URL)

  if (!response.ok) return 'error para obtener datos'

  const customers = await response.json()

  if (customers.success) {
    return customers.data
  }

  return customers.error
}

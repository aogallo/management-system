import { CustomerType } from '@src/types'

const baseUrl = `${import.meta.env.VITE_API}/customer`

export const getCustomer = async (
  id?: string = '',
): Promise<Array<CustomerType>> => {
  const URL = `${baseUrl}/${id}`

  return await fetch(URL)
    .then((response) => {
      if (!response.ok) throw new Error('error para obtener datos')
      return response.json()
    })
    .then((jsonData) => jsonData.data)
}

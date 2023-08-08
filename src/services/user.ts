import { CustomerType, ErrorType } from '../types'

export const getUser = async (
  id?: string,
): Promise<Array<CustomerType> | ErrorType> => {
  const baseUrl = import.meta.env.VITE_SOME_KEY as unknown
  let URL = ''

  if (id !== '') {
    URL = `${baseUrl as string}/customer/${id as string}`
  }
  URL = `${baseUrl as string}/customer`

  return await fetch(URL)
    .then((response) => response.json())
    .catch((error) => console.log('error', error))
}

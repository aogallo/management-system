export const getCustomer = async (
  id?: string,
): Promise<Array<CustomerType> | ErrorType> => {
  const baseUrl = import.meta.env.VITE_SOME_KEY as unknown
  let URL = ''

  if (id !== '') {
    URL = `${baseUrl as string}/customer/${id as string}`
  }

  URL = `${baseUrl as string}/customer`

  return await fetch(URL).then((response) => {
    if (!response.ok) throw new Error('error para obtener datos')
    return response.json()
  })
  // .catch((error) => console.log('error', error))
}

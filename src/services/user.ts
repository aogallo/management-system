import { ErrorType, UserType } from '@src/types'

export const getUser = async (
  id?: string,
): Promise<Array<UserType> | ErrorType> => {
  const baseUrl = import.meta.env.VITE_API as unknown
  let URL = ''

  if (id !== '') {
    URL = `${baseUrl as string}/user/${id as string}`
  }

  URL = `${baseUrl as string}/user`

  return await fetch(URL)
    .then((response) => {
      if (!response.ok) throw new Error('error para obtener datos')
      return response.json()
    })
    .then((jsonData) => {
      if (jsonData.success) {
        return jsonData.data
      }

      if (!jsonData.success) {
        return jsonData.error
      }
    })
}

import { ErrorType, UserType } from '@src/types'

const baseUrl = `${import.meta.env.VITE_API}/user`

export const getUsers = async (): Promise<Array<UserType> | ErrorType> => {
  return await fetch(baseUrl)
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

export const deleteUser = async (id: string) => {
  const URL = `${baseUrl}/${id}`

  return await fetch(URL, {
    method: 'DELETE',
  }).then((response) => {
    if (response.ok) {
      console.log('eliminado')
    }

    if (!response.ok) throw new Error('error al eliminar usuario')
  })
}

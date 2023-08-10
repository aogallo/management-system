import { ResponseAPI } from '@src/types'

const baseUrl = `${import.meta.env.VITE_API}/user`

export const getUsers = async () => {
  const response = await fetch(baseUrl)

  if (!response.ok) return 'error para obtener datos'

  const jsonData = (await response.json()) as ResponseAPI

  if (jsonData?.success) {
    return jsonData.data
  }

  return jsonData.error
}

export const deleteUser = async (id: string) => {
  const URL = `${baseUrl}/${id}`

  const response = await fetch(URL, {
    method: 'DELETE',
  })

  if (!response.ok) {
    return 'Error al eliminar el usuario'
  }

  const data = (await response.json()) as ResponseAPI

  if (data.success) {
    return 'Usuario Eliminado'
  }

  return 'error al eliminar usuario'
}

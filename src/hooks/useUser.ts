import { useQuery } from '@tanstack/react-query'

import { getUsers } from '@services/user'

export const useRetrieveUser = () => {
  const {
    isLoading,
    isError,
    data: user,
  } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUsers(),
  })

  return {
    isLoading,
    isError,
    user,
  }
}

import { useQuery } from '@tanstack/react-query'

import { getUsers } from '@services/user'
import { ErrorType, UserType } from '@src/types'

export const useRetrieveUser = () => {
  const {
    isLoading,
    isError,
    data: user,
  } = useQuery<UserType[], ErrorType>({
    queryKey: ['/api/user'],
    queryFn: () => getUsers(),
  })

  return {
    isLoading,
    isError,
    user,
  }
}

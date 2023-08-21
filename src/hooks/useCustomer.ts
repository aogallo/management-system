import { useQuery } from '@tanstack/react-query'

import { getCustomer } from '@services/customer'

export const useRetrieveCustomer = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['customer'],
    queryFn: () => getCustomer(),
  })

  return {
    isLoading,
    isError,
    customers: data,
  }
}

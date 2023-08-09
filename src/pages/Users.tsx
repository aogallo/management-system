import { useEffect, useState } from 'react'

import Content from '@components/Content'
import TitleContent from '@components/TitleContent'
import { getUser } from '@services/user'

import { CustomerType, ErrorType } from '@types'
import Table from '@components/Table'
import { useQuery } from '@tanstack/react-query'
import { UserType } from '@src/types'

function Users() {
  const { isLoading, data: user } = useQuery<UserType[], ErrorType>({
    queryKey: ['/api/user'],
    queryFn: () => getUser('1'),
  })

  const addProduct = () => {
    console.log('test')
  }

  const actions = [
    {
      actionName: 'Add Prodcut',
      onClick: addProduct,
      style: 'button-primary',
      icon: null,
    },
  ]

  return (
    <Content>
      <TitleContent title='Usuarios' actions={actions} />
      {isLoading ?? <h2>Cargando</h2>}
      {/* <Table data={user as Array<CustomerType>} /> */}
    </Content>
  )
}

export default Users

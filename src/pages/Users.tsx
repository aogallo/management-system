import { useEffect, useState } from 'react'

import Content from '@components/Content'
import TitleContent from '@components/TitleContent'
import { getUser } from '@services/user'

import { ErrorType, UserType } from '@src/types'
import Table from '@components/Table'
import { useQuery } from '@tanstack/react-query'

function Users() {
  const {
    isLoading,
    isError,
    data: user,
  } = useQuery<UserType[], ErrorType>({
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

  console.log(!isLoading && !isError)

  return (
    <Content style='table-content'>
      <TitleContent title='Usuarios' actions={actions} />
      {isLoading ?? <h2>Cargando</h2>}
      {!isLoading && !isError && (
        <Table
          title='Usuarios'
          data={user as UserType[]}
          columns={[
            {
              key: 'name',
              label: 'Nombre',
            },
            {
              key: 'username',
              label: 'Usuario',
            },
            {
              key: 'email',
              label: 'Correo',
            },
            {
              key: 'actions',
              label: 'Acciones',
            },
          ]}
        />
      )}
    </Content>
  )
}

export default Users

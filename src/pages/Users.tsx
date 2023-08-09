import { useEffect, useState } from 'react'

import Content from '@components/Content'
import TitleContent from '@components/TitleContent'
import { getUser } from '@services/user'

import { CustomerType, ErrorType } from '@types'
import Table from '@components/Table'

function Users() {
  const [user, setUser] = useState<Array<CustomerType> | ErrorType>([])

  useEffect(() => {
    getUser()
      .then((data) => setUser(data))
      .catch((error) => console.log(error))
  }, [])

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
      <Table data={user as Array<CustomerType>} />
    </Content>
  )
}

export default Users

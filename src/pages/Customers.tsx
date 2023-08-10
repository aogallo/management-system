import Content from '@components/Content'
import Table, { ColumnsType } from '@components/Table'
import TitleContent from '@components/TitleContent'
import { useRetrieveCustomer } from '@hooks/useCustomer'
import { CustomerType } from '@src/types'

const columns: ColumnsType[] = [
  {
    key: 'name',
    label: 'Nombre',
  },
  {
    key: 'age',
    label: 'Edad',
  },
  {
    key: 'email',
    label: 'Correo',
  },
  {
    key: 'phone',
    label: 'Télefono',
  },
  {
    key: 'actions',
    label: 'Acciones',
  },
]

const Customers = () => {
  const { isLoading, isError, customers } = useRetrieveCustomer()

  return (
    <Content style='table-content'>
      <TitleContent title='Clientes' />
      <Table
        columns={columns}
        isLoading={isLoading}
        isError={isError}
        data={customers as CustomerType[]}
      />
    </Content>
  )
}

export default Customers

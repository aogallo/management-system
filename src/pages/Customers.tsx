import Content from '@components/Content'
import Table, { ColumnsType } from '@components/Table'
import TitleContent from '@components/TitleContent'

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
  return (
    <Content style='table-content'>
      <TitleContent title='Clientes' />
      <Table columns={columns} isLoading={false} isError={false} data={[]} />
    </Content>
  )
}

export default Customers

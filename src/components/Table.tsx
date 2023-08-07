import Content from './Content'
import TitleContent from './TitleContent'

export interface User {
  name: string
  age: number
  email: string
  phone: string
}

export interface Props {
  data: User[]
}

function Table({ data }: Props) {
  const addProduct = () => {
    console.log('test function addProduct')
  }

  const title = 'Suppliers'
  const actions = [
    {
      actionName: 'Add Prodcut',
      onClick: addProduct,
      style: 'button-primary',
      icon: null,
    },
    {
      actionName: 'Filters',
      onClick: addProduct,
      style: 'button-neutral',
      icon: <span className='material-symbols-outlined'>filter_list</span>,
    },
    {
      actionName: 'Download',
      onClick: addProduct,
      style: 'button-neutral',
      icon: <span className='material-symbols-outlined'>filter_list</span>,
    },
  ]

  const rows = data.map((row) => {
    return (
      <tr className='table-row'>
        <td className='table-row__content'>{row.name}</td>
        <td className='table-row__content'>{row.age}</td>
        <td className='table-row__content'>{row.phone}</td>
        <td className='table-row__content'>{row.email.toLowerCase()}</td>
        <td className='table-row__content table-actions'>
          <span className='material-symbols-outlined icon-info'>edit</span>
          <span className='material-symbols-outlined icon-error'>delete</span>
        </td>
      </tr>
    )
  })

  return (
    <Content style='table-content'>
      <TitleContent title={title} actions={actions} />
      <table className='table'>
        <thead>
          <tr className='table-title'>
            <th>nombre del paciente</th>
            <th>edad</th>
            <th>teléfono</th>
            <th>email</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>

      <section className='pagination'>
        <button className='button button-neutral'>previus</button>
        <span className='pagination-label'>page 1 of 10</span>
        <button className='button button-neutral'>next</button>
      </section>
    </Content>
  )
}

export default Table

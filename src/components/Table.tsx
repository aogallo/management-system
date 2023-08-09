import { useEffect } from 'react'

import { CustomerType, UserType } from '@src/types'
import Content from '@components/Content'
import TitleContent from '@components/TitleContent'

export interface ColumnsType {
  key: string
  label: string
}

export interface Props {
  data: CustomerType[] | UserType[]
  columns: ColumnsType[]
  // data: CustomerType[] | UserType[]
}

function Table({ data, columns }: Props) {
  const rowKeys = columns.map((column) => column.key)
  const addProduct = () => {
    console.log('test function addProduct')
  }
  useEffect(() => {
    console.log(data)
  }, [])

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

  const rows = data.map((element) => {
    return (
      <tr className='table-row' key={element.id}>
        {rowKeys.map((row) =>
          row === 'actions' ? (
            <td className='table-row__content table-actions'>
              <span className='material-symbols-outlined icon-info'>edit</span>
              <span className='material-symbols-outlined icon-error'>
                delete
              </span>
            </td>
          ) : (
            <td className='table-row__content'>{element[row]}</td>
          ),
        )}
      </tr>
    )
  })

  return (
    <Content style='table-content'>
      <TitleContent title={title} actions={actions} />
      <table className='table'>
        <thead>
          <tr className='table-title'>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
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

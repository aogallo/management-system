import { CustomerType, UserType } from '@src/types'

export interface ColumnsType {
  key: string
  label: string
}

export interface Props {
  data: CustomerType[] | UserType[]
  columns: ColumnsType[]
  isLoading: boolean
  isError: boolean
}

function Table({ data, isLoading, columns }: Props) {
  const rowKeys = columns.map((column) => column.key)

  const editProduct = () => {
    console.log('editing the product')
  }

  const deleteProduct = () => {
    console.log('deleting a product')
  }

  const addProduct = () => {
    console.log('test function addProduct')
  }

  const rows =
    !isLoading &&
    data.map((element) => {
      return (
        <tr className='table-row' key={element.id}>
          {rowKeys.map((row) =>
            row === 'actions' ? (
              <td
                key={`${row}-action`}
                className='table-row__content table-actions'
              >
                <span
                  className='material-symbols-outlined icon-info'
                  onClick={editProduct}
                >
                  edit
                </span>
                <span
                  className='material-symbols-outlined icon-error'
                  onClick={deleteProduct}
                >
                  delete
                </span>
              </td>
            ) : (
              <td key={row} className='table-row__content'>
                {element[row]}
              </td>
            ),
          )}
        </tr>
      )
    })

  const skeleton = columns.map((colum) => (
    <td key={colum.label} className='table-row__content loading'>
      <div className='bar'></div>
    </td>
  ))

  return (
    <>
      <table className='table'>
        <thead>
          <tr className='table-title'>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? <tr className='table-row'>{skeleton}</tr> : rows}
        </tbody>
      </table>

      <section className='pagination'>
        <button className='button button-neutral'>previus</button>
        <span className='pagination-label'>page 1 of 10</span>
        <button className='button button-neutral'>next</button>
      </section>
    </>
  )
}

export default Table

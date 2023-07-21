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
    <div className='content table-content'>
      <div className='content-actions'>
        <span className='content-title'>Suppliers</span>
        <div className='content-actions__buttons'>
          <button className='button button-primary'>
            <span>Add Product</span>
          </button>
          <button className='button button-neutral'>
            <img className='button-icon' src='/filters.svg' alt='' />
            Filters
          </button>
          <button className='button button-neutral'>Download all</button>
        </div>
      </div>
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
    </div>
  )
}

export default Table

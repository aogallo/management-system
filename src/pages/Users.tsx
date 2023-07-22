import Content from '../components/Content'

function Users() {
  return (
    <Content>
      <div className='content-actions'>
        <span className='content-title'>Usuarios</span>
        <div className='content-actions__buttons'>
          <button className='button button-primary'>
            <span>Agregar usuario </span>
          </button>
          {/* <button className='button button-neutral'> */}
          {/*   <img className='button-icon' src='/filters.svg' alt='' /> */}
          {/*   Filters */}
          {/* </button> */}
          {/* <button className='button button-neutral'>Download all</button> */}
        </div>
      </div>
    </Content>
  )
}

export default Users

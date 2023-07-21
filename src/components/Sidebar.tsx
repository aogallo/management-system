import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <img className='logo' src='/logo-diana.png' alt='' />
      <ul className='menu'>
        <li className='menu-item'>
          <a href='/dashbord'>
            <span className='material-symbols-outlined'>home</span>
            <span>Dashboard</span>
          </a>
        </li>
        <li className='menu-item'>
          <a href='/inventory'>
            <span className='material-symbols-outlined'>inventory</span>
            <span>Inventory</span>
          </a>
        </li>
        <li className='menu-item'>
          <span className='material-symbols-outlined'>summarize</span>
          <span>Reports</span>
        </li>
        <li className='menu-item'>
          <Link to='/users'>
            <span className='material-symbols-outlined'>account_circle</span>
            <span>Usuarios</span>
          </Link>
        </li>
        <li className='menu-item'>
          <span className='material-symbols-outlined'>order_approve</span>
          <span>Orders</span>
        </li>
        <li className='menu-item'>
          <span className='material-symbols-outlined'>shopping_bag</span>
          <span>Manage Store</span>
        </li>
        <li className='menu-item'>
          <span className='material-symbols-outlined'>settings</span>
          <span>Settings</span>
        </li>
        <li className='menu-item'>
          <span className='material-symbols-outlined'>logout</span>
          <span>Salir</span>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar

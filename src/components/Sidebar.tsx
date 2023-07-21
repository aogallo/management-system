import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <img className='logo' src='/logo-diana.png' alt='' />
      <ul className='menu'>
        <li>
          <Link className='menu-item' to='/dashbord'>
            <span className='material-symbols-outlined'>home</span>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link className='menu-item' to='/inventory'>
            <span className='material-symbols-outlined'>inventory</span>
            <span>Inventory</span>
          </Link>
        </li>
        <li>
          <Link className='menu-item' to='/reports'>
            <span className='material-symbols-outlined'>summarize</span>
            <span>Reports</span>
          </Link>
        </li>
        <li>
          <Link className='menu-item' to='/users'>
            <span className='material-symbols-outlined'>account_circle</span>
            <span>Usuarios</span>
          </Link>
        </li>
        <li>
          <Link className='menu-item' to='/orders'>
            <span className='material-symbols-outlined'>order_approve</span>
            <span>Orders</span>
          </Link>
        </li>
        <li>
          <Link className='menu-item' to='/'>
            <span className='material-symbols-outlined'>shopping_bag</span>
            <span>Manage Store</span>
          </Link>
        </li>
        <li>
          <Link className='menu-item' to='/'>
            <span className='material-symbols-outlined'>settings</span>
            <span>Settings</span>
          </Link>
        </li>
        <li>
          <Link className='menu-item' to='/'>
            <span className='material-symbols-outlined'>logout</span>
            <span>Salir</span>
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar

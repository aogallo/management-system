function App() {
  const data = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      age: 37,
      phone: '1-770-736-8031 x56442',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      age: 43,
      phone: '010-692-6593 x09125',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      age: 68,
      phone: '1-463-123-4447',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      age: 29,
      phone: '493-170-9623 x156',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      age: 31,
      phone: '(254)954-1289',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      age: 71,
      phone: '1-477-935-8478 x6430',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      age: 24,
      phone: '210.067.6132',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      age: 14,
      phone: '586.493.6943 x140',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      age: 24,
      phone: '(775)976-6794 x41206',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      age: 38,
      phone: '024-648-3804',
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
    <div className='body'>
      <header className='header'>
        <div className='header-search'>
          <img src='/search.svg' alt='buscar' />
          <input
            className='header-search__input'
            type='text'
            placeholder='Search product, supplier, order'
            name='header-search'
            id='header-search'
          />
        </div>
        <div className='header-profile'>
          <img src='/notification.svg' alt='' />
          <img className='avatar' src='/profile.svg' alt='perfil' />
        </div>
      </header>
      <aside className='sidebar'>
        <img className='logo' src='/logo-diana.png' alt='' />
        <ul className='menu'>
          <li className='menu-item'>
            <span className='material-symbols-outlined'>home</span>
            <span>Dashboard</span>
          </li>
          <li className='menu-item'>
            <span className='material-symbols-outlined'>inventory</span>
            <span>Inventory</span>
          </li>
          <li className='menu-item'>
            <span className='material-symbols-outlined'>summarize</span>
            <span>Reports</span>
          </li>
          <li className='menu-item'>
            <span className='material-symbols-outlined'>account_circle</span>
            <span>Supplier</span>
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
      <main className='main'>
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
                <th>Nombre del paciente</th>
                <th>Edad</th>
                <th>Teléfono</th>
                <th>Email</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>

          <section className='pagination'>
            <button className='button button-neutral'>Previus</button>
            <span className='pagination-label'>Page 1 of 10</span>
            <button className='button button-neutral'>Next</button>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App

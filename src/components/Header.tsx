const Header = () => {
  return (
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
  )
}

export default Header

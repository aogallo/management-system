import { Link } from 'react-router-dom'

import { LoginType } from '@src/types'

function Login() {
  return (
    <div className='login-container'>
      <form className='login-content'>
        <div className='login-logo'>
          <img className='logo ' src='/logo-diana.png' alt='' />
        </div>
        <label className='form-label'>Usuario*</label>
        <input
          className='form-input'
          type='text'
          name='user'
          id='user'
          placeholder='Ingrese su usuario'
        />

        <label className='form-label'>Contraseña*</label>
        <input
          className='form-input'
          type='password'
          name='password'
          id='password'
          placeholder='Ingrese su password'
        />
        <Link className='form-label__information' to='reset-password'>
          Olvidaste tu contraseña
        </Link>
        {/* </div> */}
        <button className='button-primary button-login' type='submit'>
          <span>Ingresar</span>
        </button>
      </form>
    </div>
  )
}

export default Login

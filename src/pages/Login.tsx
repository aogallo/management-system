import { useFormInput } from '@hooks/useFormInput'
import { Link } from 'react-router-dom'

function Login() {
  const username = useFormInput('')
  const password = useFormInput('')

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log(e.target)
    console.log('login')
  }

  return (
    <div className='login-container'>
      <form className='login-content' onSubmit={handleLogin}>
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
          {...username}
        />

        <label className='form-label'>Contraseña*</label>
        <input
          className='form-input'
          type='password'
          name='password'
          id='password'
          placeholder='Ingrese su contraseña'
          {...password}
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

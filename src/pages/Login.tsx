import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

import useAuth from '@hooks/useAuth'
import { useFormInput } from '@hooks/useFormInput'
import { logIn } from '@services/login'

import { UserLoggedType } from '@src/types'

function Login() {
  const { addAuth } = useAuth()
  const userRef = useRef()
  const username = useFormInput('')
  const password = useFormInput('')
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  const { mutateAsync } = useMutation(logIn)

  useEffect(() => {
    userRef.current.focus()
  }, [])

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const data = await mutateAsync({
        username: username.value,
        password: password.value,
      })

      console.log(data)

      if (!data?.success && data?.error) {
        setError(true)
        if (typeof data.error !== 'string') {
          console.log('array error')
          data?.error.map((error) =>
            setMessage((prev) => error.message.concat('.\n', prev)),
          )
        }
        if (typeof data.error === 'string') {
          console.log('string error')
          setMessage(data?.error)
        }
      }

      if (data?.success) {
        setError(false)
        setMessage('Logueado')
        const login = data.data as UserLoggedType
        window.localStorage.setItem('user', login.token)
        addAuth({ user: login, isLogged: true })
        navigate('/dashboard')
      }
    } catch (error) {
      console.log(error)
      setError(true)
      setMessage('Error al aunteticarse, comuniquese con el administrador.')
    }
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
          ref={userRef}
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
        {message && (
          <p className={error ? 'alert-error' : 'alert-info'}>{message}</p>
        )}
        <button className='button-primary button-login' type='submit'>
          <span>Ingresar</span>
        </button>
      </form>
    </div>
  )
}

export default Login

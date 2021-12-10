import React from 'react'

import LoginForm from '@app/containers/LoginContainer/form'

import './_loginContainer.scss'

const LoginContainer: React.FC = () => {
  return (
    <div className="loginContainer">
      <h3 className="loginContainer__title">Авторизация</h3>
      <LoginForm />
    </div>
  )
}

export default LoginContainer

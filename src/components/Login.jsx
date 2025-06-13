

import React from 'react'

const Login = () => {
  return (
    <form id='form'>
     <h2 id='login-title'>Login</h2>
      <input id='email' type='email' placeholder='Email' />
      <input type='password' placeholder='password'/>
      <button>Login</button>
    </form>
  )
}

export default Login

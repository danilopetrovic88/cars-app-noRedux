import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import authService from "../services/AuthService"

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      authService.login(credentials);
      history.push('/cars')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-8'>
          <h3>Login Form</h3>
          <form onSubmit={handleSubmit}>
            <input 
            className='form-control' 
            placeholder='email' 
            type='email' 
            name='email' 
            onChange={(({target} )=> setCredentials({...credentials, email: target.value}))}
            /><br />
            <input 
            className='form-control' 
            placeholder='password' 
            type='password' 
            name='password' 
            onChange={(({target} )=> setCredentials({...credentials, password: target.value}))}
            /><br />
            <button className='btn btn-success btn-sm'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
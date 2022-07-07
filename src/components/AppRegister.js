import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import authService from "../services/AuthService"

const AppRegister = ({onRegister}) => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: ''
  });

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      authService.register(credentials);
      history.push('/login')
      onRegister();
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-8'>
          <h3>Register Form</h3>
          <form onSubmit={handleSubmit}>
          <input 
            className='form-control' 
            placeholder='name' 
            type='text' 
            name='name' 
            onChange={(({target} )=> setCredentials({...credentials, name: target.value}))}
            /><br />
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
            <button className='btn btn-warning btn-sm'>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AppRegister
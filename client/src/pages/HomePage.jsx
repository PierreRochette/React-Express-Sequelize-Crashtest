import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import LoginForm from '../components/forms/LoginForm';

const HomePage = () => {

  const { token } = useContext(AuthContext); 

  if (!token) {
    return <LoginForm />
  }

  return (
    <div className='bg-red-500'>HomePage</div>
  )
}

export default HomePage
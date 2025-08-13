import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import LoginForm from '../components/forms/LoginForm';

const SecondPage = () => {

    const { token } = useContext(AuthContext); 

    if (!token) {
        return <LoginForm />
    }

  return (
    <div className='bg-blue-500'>SecondPage</div>
  )
}

export default SecondPage
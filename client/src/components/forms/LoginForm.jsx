import React, { useState } from 'react'
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { Button, Card, CardContent, CircularProgress, TextField } from "@mui/material"; 
import toast from "react-hot-toast"; 

const LoginForm = () => {

  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const { login } = useContext(AuthContext); 
  const [loading, setLoading] = useState(false); 

  const handleLogin = async (e) => {
    e.preventDefault(); 
    try {
      setLoading(true); 
      await login(username, password); 
      console.log("Login successfull"); 
    } catch (err) {
      console.error("Login failed : ", err); 
      toast.error(`Erreur de connexion: ${err.response.data.message}`)
    } finally {
      setLoading(false); 
    }
  }

  return (
    <div>
      <Card>
        <CardContent>
          <form onSubmit={handleLogin}>
            <TextField fullWidth label="Nom d'utilisateur" value={username} margin='dense' variant='filled' type='text' required={true} onChange={(e) => setUsername(e.target.value)}/>
            <TextField fullWidth label="Mot de passe" value={password} margin='dense' variant='filled' type='text' required={true} onChange={(e) => setPassword(e.target.value)}/>
            {loading ? (
              <div className='flex justify-center'><CircularProgress /></div>
            ) : (
              <div>
                <Button onClick={(e) => handleLogin(e)} >Se connecter</Button>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginForm
import { createContext } from "react";
import { userUrl } from "../config/urls"
import { useState } from "react";
import axios from "axios"; 

const loginUrl = `${userUrl}/login`; 

const AuthContext = createContext(); 

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(''); 
    const [token, setToken] = useState(localStorage.getItem("token") || ""); 

    const login = async (username, password) => {

        try {
            let response = await axios.post(loginUrl, { username, password }); 
            const { token, ...userData } = response.data; 
            setToken(token); 
            setUser(userData); 
            localStorage.setItem('token', token); 
        } catch (err) {
            console.error("Failed to login", err); 
            throw err; 
        }
    }; 

    const logout = () => {
        setToken(null); 
        setUser(null); 
        localStorage.removeItem("token"); 
        localStorage.removeItem("poste"); 
    }; 

    return (
        <AuthContext.Provider value={{ user, token, login }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext; 
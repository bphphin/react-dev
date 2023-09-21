import React from 'react'
import useHandleLogin from '../hooks/useHandleLogin';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

export default function Login() {

    const { info, handleChange } = useHandleLogin({
        username: '',
        password: ''
    });
    let [,setInfoLogin] = useAuth();

    const handleLogin = async () => {
        const { data } = await axios.post('https://dummyjson.com/auth/login', info);
        setInfoLogin(data);
    }
    return (
        <>
            <p>
                <input type='text' name='username' placeholder='Enter your username' onChange={ handleChange }/>
            </p>
            <p>
                <input type='password' name='password' placeholder='Enter your password' onChange={ handleChange }/>
            </p>
            <button onClick={ handleLogin } >Login</button>
        </>
    )
}

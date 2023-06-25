import React, { useState } from 'react'
import { useLogin } from 'react-admin'
import '../styles/login.css'
import axios from  'axios'

export const Login = () => {
    const [loading,setLoading] = useState(false);
    const login = useLogin();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const Data = new FormData(e.currentTarget);
        const userData = {
            email: Data.get('email'),
            password: Data.get('password'),
        };
        if(userData.email=='' || userData.password==''){alert('all inputs are required');return}
        login(userData)
    
    }
  return (
   <div className="login-wrapper">
    <div className="login">
        <h2>ADMIN - LOGIN</h2>
        <form onSubmit={handleSubmit} className='form'>
            <div className="form-control">
                <input type="text" placeholder='Email' name='email'/>
            </div>
            <div className="form-control">
                <input type="password" placeholder='Password' name='password'/>
            </div>
            <button className='login-btn' type='submit'>LOGIN</button>
        </form>
    </div>
   </div>
  )
}

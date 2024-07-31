import React, { useState } from 'react';
import  { useNavigate}  from 'react-router-dom';
import {login} from '../services/api'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { email, password } = formData;
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await login({ email, password });
            console.log('Login successful:', res);
            if(res.token){
                localStorage.setItem('token', res.token);
                navigate('/Dashboard')
            }
            
            // Handle post-login actions (e.g., store token, redirect to dashboard)
        } catch (err) {
            console.error('Login error:', err);
        }
    };
    

    return (
        <div className='flex justify-center items-center w-[100vw] h-[100vh]'>
        <div className='h-auto w-auto border-2 border-gray-600 rounded  flex flex-col bg-gray-200'>     
        <form className='space-y-5 flex flex-col' onSubmit={onSubmit}>
            <h2 className='text-center'>Login</h2>
            <div className='flex mx-2'>
                <input className='border w-full p-1 rounded' placeholder='Email' type="email" name="email" value={email} onChange={onChange} required />
            </div>
            <div className='flex mx-2'>
                <input className='border w-full p-1 rounded' placeholder='Password' type="password" name="password" value={password} onChange={onChange} required />
            </div>
            <button className='bg-gray-500 mx-auto my-auto rounded w-20 p-1 text-gray-200' type="submit">Login</button>
        </form>
        </div>
        </div>
    );
};

export default Login;

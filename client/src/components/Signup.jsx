import React, { useState } from 'react';
import {signup} from '../services/api';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate= useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        name:''
    });

    const { username, email,name, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
   const onSubmit= async (e)=> {
        e.preventDefault();
        try {
            
            const res = await signup({ username, email,name,password })
            console.log(res);
            if(res.token){
                navigate('/Dashboard')
                localStorage.setItem('token', res)
            }
            // Handle post-signup actions (e.g., redirect to login)
        } catch (err) {
            console.error('Signup error:', err.response);
        }
    };

    return (
        <div className='flex justify-center items-center w-[100vw] h-[100vh] border'>
            <div className='h-auto w-64 border-2 border-gray-600 rounded  flex flex-col bg-gray-200'>
        <form className='space-y-5 flex flex-col' onSubmit={onSubmit}>
            <h2 className='text-center text-2xl'>Sign Up</h2>
            <div className='flex space-x-2 mx-1'>
                <input className='border w-full p-1 rounded' type="text" placeholder='Username' name="username" value={username} onChange={onChange} required />
            </div>
            <div  className='flex space-x-2 mx-1'>
                <input className='border w-full p-1 rounded' type="email" name="email" placeholder='Your Email' value={email} onChange={onChange} required />
            </div>
            <div  className='flex space-x-2 mx-1'>
                <input className='border w-full p-2 rounded' type="password" placeholder='Password' name="password" value={password} onChange={onChange} required />
            </div>
            <div  className='flex space-x-2 mx-1'>
                <input className='border w-full p-2 rounded' type="name" placeholder='name' name="name" value={name} onChange={onChange} required />
            </div>
            <button className='bg-gray-500 mx-auto my-auto rounded w-20 p-1 text-gray-200' type="submit" onClick={onSubmit}>Sign Up</button>

            <div className='flex justify-center space-x-1'>
                <span>
                    Already a user? 
                </span>
                <a className='underline' href="/login">Login</a>
            </div>
        </form>
        </div>
        </div>
    );
};

export default Signup;

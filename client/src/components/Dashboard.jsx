import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { dashboard,completedTodo } from '../services/api'
const Dashboard = () => {

const [data, setData]= useState([])
const [toggle, setToggle]= useState(false)
const navigate= useNavigate();
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            navigate('/signup')
        }
        dashboard(token).then((res)=>{
            setData(res.goal)
        })  
    },[toggle])

    const completed = async(id)=>{
        const token = localStorage.getItem('token')
       await completedTodo(id, token)
        setToggle(!toggle)
    }
  return (
    <div className='flex flex-col space-y-6 py-14 px-10 '>
        <h2>Youir Analysis</h2>

        <div className='w-full space-x-4' >
            <div className='w-full h-full border-2 border-gray-300 rounded flex flex-col justify-center p-4 '>
                <span>Long Term Goals</span>
                {data.map((goal, index)=> (<div key={index} className='flex justify-between'>  <span className='text-gray-600 my-1 rounded p-1 mx-1'>{index+1}. {goal.long_goal}</span>
                <input onClick={()=>completed({goal})} className='' type="checkbox" name="" id="" />
                </div> ))}
            </div>
        </div>
        <div className='flex w-full space-x-8' >
            <h2>Expenses chart</h2>
        </div>

        <div className='grid grid-cols-2 w-full space-x-4' >
            <div className='max-w-full h-[150px] border-2 border-gray-300 rounded flex flex-col justify-center p-4 '>
                <span>Your Activity</span>
                <span className='text-gray-600'>Your balance : Rs 2000</span>
            </div>
            <div className='max-w-full h-[150px] border-2 border-gray-300 rounded flex flex-col justify-center p-4 '>
                <span>Adarsh Tiwari</span>
                <span className='text-gray-600'>Your Expenses: Rs 300</span>
            </div>
        </div>
    </div>
  )
}

export default Dashboard

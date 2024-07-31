import React from 'react'

const Review = () => {
  return (
    <div>
        <div className='border-b-4 border-gray-400 my-4 max-w-[1240px] mx-auto'></div>
        <div className='flex flex-col items-center'>
            <div className='max-w-[95vw] mx-auto grid lg:grid-cols-3 bg-gray-500 rounded-lg sm:w-full'>
            <div className='lg:col-span-2 my-4 items-center text-center'>
                <h1 className=' md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Would you like give us a suggestion?</h1>
                <p className='font-bold mt-2 text-center'>Give your review and suggestions to improve the quality and features of our Application.</p>
            </div>
            <div className='my-4'>
                <div className=' flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='w-full sm:ml-2 p-3 flex rounded-md text-black' type="email" placeholder='Your Review'/>
                    <button className='bg-[#00df9a] w-[200px] rounded-lg font-medium ml-4 my-6 px-6 py-2.5 text-black sm:mr-3'>Send Review</button>
                </div>
            </div>
            
        </div>
            
        </div>
       
    </div>
  )
}

export default Review

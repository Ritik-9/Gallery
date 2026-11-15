import React, { useEffect } from 'react'
import { CloudUpload } from 'lucide-react';
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom';

const Post = () => {
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        
        const formData=new FormData(e.target)

        axios.post('http://localhost:3000/create-post',formData)
        .then((res)=>{
            navigate('/feed')
        })
    }
  return (
    <div className='flex justify-center items-center h-screen bg-gray-200'>
        <form onSubmit={handleSubmit} className='flex flex-col w-150 justify-center items-center bg-white p-10 gap-5 rounded-2xl shadow-2xl shadow-olive-500'>
            <h1 className='text-3xl font-bold'>Share Your Moment</h1>
            <div className='bg-blue-200 w-full border rounded-2xl border-gray-300'>
                {/* <input type='file' name='img' accept='img/*'></input> */}
                <label className="px-7 py-2 text-cyan-400 cursor-pointer">
                    <p className='flex justify-center items-center'><CloudUpload size={72} /></p>
                    <p className='text-2xl flex justify-center items-center'>Upload Image</p>
                    <p className='text-lg flex justify-center items-center'>Click To Upload</p>
                    <input 
                        type="file"
                        name='img'
                        className="hidden" 
                        accept="image/*"
                    />
                </label>
            </div>
            <div className='w-full'>
            <textarea  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400" name='caption' placeholder='Add a Caption' required></textarea>
            </div>
            <button type='submit' className='w-full px-7 py-2 rounded-2xl bg-blue-600 hover:scale-95 hover:bg-blue-800'>Post</button>
        </form>
      
    </div>
  )
}

export default Post

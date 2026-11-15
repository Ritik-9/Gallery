import React, { useEffect } from 'react'
import { ScanBox,Plus } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';

const Feed = () => {
    const[post,setPost]=useState([
        {
            _id:1,
            img:"https://preview.redd.it/any-update-on-vanitas-manga-renewal-its-been-so-long-please-v0-cscbklairlje1.jpeg?width=640&crop=smart&auto=webp&s=39f8d7d5dc7b66c3096dc83cf4355fbafc9bd41e",
            caption:"The Case Study of Vanitas"
        }
    ])
    useEffect(()=>{
        axios.get('http://localhost:3000/posts')
        .then((res)=>{
            console.log(res)
            setPost(res.data.posts)
        })
    },[])
  return (
    <div className='h-screen bg-gray-200 flex flex-col'>
        <div className='w-full bg-white px-5 py-3 flex justify-between items-center'>
            <div className='flex gap-7 items-center'>
            <p className='text-cyan-400'><ScanBox size={72} /></p>
            <p className='text-2xl font-semibold'>Your Posts</p>
            </div>
            <a href='/' className='px-7 py-2 text-xl rounded-xl bg-blue-600 hover:scale-95 hover:bg-blue-800'>
                <div className='flex gap-2 items-center text-white'>
                <span><Plus size={30} /></span>
                <p>New Post</p>
                </div>
            </a>
        </div>
        <div className='flex-1 w-full px-7 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 overflow-y-auto content-start'>
                {post.length>0 ?(
                    post.map((item)=>(
                        <div key={item._id}className='bg-white rounded-xl h-96 w-full px-7 py-5 shrink-0'>
                            <div className='w-full h-2/3 overflow-hidden'>
                                <img src={item.img} alt={item.caption} className='h-ful w-full object-cover'></img>
                            </div>
                            <div className='w-full h-1/3 px-5 py-4 flex flex-col justify-between'>
                                <p className='text-gray-800 font-medium line-clamp-2 text-base'>
                                    {item.caption}
                                </p>
                            </div>
                        </div>
                    ))
                ):(
                    <h1>No Post Available</h1>
                )}
        </div>
    </div>
  )
}

export default Feed

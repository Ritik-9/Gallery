import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Post from './post'
import Feed from './Feed'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Post/>}></Route>
        <Route path='/feed'element={<Feed />}></Route>
      </Routes>
    </div>
  )
}

export default App

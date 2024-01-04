import React from 'react'
import Navbar from './Navbar'
import UserWidget from './UserWidget'

const Main = () => {
  return (
    <div className=' container flex flex-col'>
      <Navbar/>
      <UserWidget/>

    </div>
  )
}

export default Main
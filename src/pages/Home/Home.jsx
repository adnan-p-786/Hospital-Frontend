import React from 'react'
import './Home.css'
import img from '../../assets/Group 94.png'
function Home() {
  return (
    <div
      className="text-amber-600 w-full h-screen"
      style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
    >

    </div>
  )
}

export default Home

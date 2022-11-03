import React from 'react'
import Navbar1 from './Navbar'
import Stats from './homecomponents/Stats'
import Profile from './homecomponents/Profile'
function Home() {
  return (
    <div>
        <Navbar1/>
        <div style={{display:"flex"}}>
        <Stats/>
        <Profile/>
        </div>
       

    </div>
  )
}

export default Home
import React from 'react'
import '../../App.css'
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import Rightsidebar from '../../components/Rightsidebar/Rightsidebar'
import Homemainbar from '../../components/Homemainbar/Homemainbar'
const Home = () => {
  return (
    <div className='home-container-1'>
      <Leftsidebar/>
      <div className='home-container-2'>
        <Homemainbar />
        <Rightsidebar/>
      </div>
    </div>
  )
}

export default Home

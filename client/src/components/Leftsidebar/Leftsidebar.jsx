import React, { useContext } from 'react'
import Friends from "../../assets/1.png"
import Groups from "../../assets/2.png"
import Market from "../../assets/3.png"
import Watch from "../../assets/4.png"
import Memories from "../../assets/5.png"
import './leftBar.scss'
import { AuthContext } from '../../context/authContext'

function LeftBar() {
  const { currentUser } = useContext(AuthContext)
  return (
    <div className='leftBar'>
        <div className='container'>
          < div className='menu'>
            <div className='user'>
            <img src={currentUser.profilePic}/>
            <span>{currentUser.name}</span>
            </div>
            <div className='item'>
              <img src={Friends} alt=''/>
              <span>Friends</span>
            </div>
            <div className='item'>
              <img src={Groups} alt=''/>
              <span>Groups</span>
            </div>
            <div className='item'>
              <img src={Market} alt=''/>
              <span>Market</span>
            </div>
            <div className='item'>
              <img src={Watch} alt=''/>
              <span>Watch</span>
            </div>
            <div className='item'>
              <img src={Memories} alt=''/>
              <span>Memories</span>
            </div>
            <hr/>
            
          </div>
        </div>
    </div>
  )
}

export default LeftBar
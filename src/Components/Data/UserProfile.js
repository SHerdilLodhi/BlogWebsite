import { Avatar } from '@mui/material'
import React from 'react'
import "../Pages/Profile/Profile.css"
export default function UserProfile() {
  return (
    <div className='userProfile'>
       <Avatar alt="Remy Sharp" src="./myimg.png"  sx={{ width: 104, height: 100 }}/>
       <h2 style={{fontWeight:"bolder"}}>Sherdil Lodhi</h2>
       <h4>lodhisherdil1@gmail.com</h4>
       <h4>Posts : 6</h4>
    </div>
  )
}

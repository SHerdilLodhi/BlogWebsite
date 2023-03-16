import React from 'react'
import './Profile.css';
import Button from "@mui/material/Button";
import MyPosts from '../../Data/MyPosts';
import UserProfile from '../../Data/UserProfile';

export default function Profile() {
  return (
    <div className="lol">
    <div className='mainprofile'>
     <MyPosts />
     <MyPosts/>
    </div>

        
       <div  className="profile"><UserProfile/></div>        
       </div>
  )
}

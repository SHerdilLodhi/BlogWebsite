import React, { useState } from 'react'
import "./Home.css"
import { useNavigate } from "react-router-dom"
import { Tooltip } from '@mui/material'
export default function Home() {
  let nav = useNavigate()
  const [postData, setpostData] = useState({})
  return (
    <div className='home-main'>
      <div className="home-posts">
      <div className="home-post-data">
       
      <Tooltip title="Open Profile" disableInteractive>
      
        <div onClick={()=>nav("/blogposter")} className="added-img">
         <img src="./logo192.png" alt="" />
       
        <h3>Sherdil Lodhi</h3>
        <h3 style={{marginLeft:"20px"}}>12/02/2023</h3>
        </div>
        </Tooltip>
    



    
<div onClick={()=>nav("/blogpage")}>
        <h2>3 Habits That Sabotage Your Life</h2>
        <h4>These habits are destroying your self-discipline — Starting off a new year with a good feeling is something so many of us want. This is why New Year’s resolutions are so popular. New year, new chances, right?...</h4>
        <p>Category:Learnig</p></div>
        </div>

        <img className='rightimg' src="./logo192.png" alt="" />
       
      </div>




















      <div className="home-posts">
      <div className="home-post-data">
       
       
        <div className="added-img">
         <img src="./logo192.png" alt="" />
       
        <h3 >Sherdil Lodhi</h3>
        <h3 style={{marginLeft:"20px"}}>12/02/2023</h3>
        </div>




        
        <h2>3 Habits That Sabotage Your Life</h2>
        <h4>These habits are destroying your self-discipline — Starting off a new year with a good feeling is something so many of us want. This is why New Year’s resolutions are so popular. New year, new chances, right?...</h4>
        <p>Category:Learnig</p>
        </div>
      
        <img className='rightimg' src="./logo192.png" alt="" />
     
      </div>





















      
    </div>
  )
}

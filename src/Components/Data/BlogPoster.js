import { Avatar, Button, Tooltip } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function BlogPoster() {
    let nav = useNavigate()
  return (
    <div className="lol">
    <div className='mainprofile'>
          <div className="postss"> 
        
        

        <div className="home-posts">
      <div className="home-post-data">
       
       
        <div className="added-img">
         <img src="./logo192.png" alt="" />
       
        {/* <h3>Sherdil Lodhi</h3> */}
        <h3 style={{marginLeft:"20px"}}>12/02/2023</h3>
        </div>



        <Tooltip title="Open Blog!" placement='top' >
        <div onClick={()=>nav('/blogpage')} className="">

        <h2>3 Habits That Sabotage Your Life</h2>
        <h4>These habits are destroying your self-discipline — Starting off a new year with a good feeling is something so many of us want. This is why New Year’s resolutions are so popular. New year, new chances, right?...</h4>
        <p>Category:Learnig</p>
        </div>
        </Tooltip>
       
       
        </div>
      
        <img className='rightimg' src="./logo192.png" alt="" />
      </div>
      <div className="delbutton">

        <Button variant="outlined" color='error'>Delete</Button>

      </div>
   


   
        </div>

    </div>


    <div  className="profile">
        
    <div className='userProfile'>
       <Avatar alt="Remy Sharp" src="./myimg.png"  sx={{ width: 104, height: 100 }}/>
       <h2 style={{fontWeight:"bolder"}}>Sherdil Lodhi</h2>
       <h4>lodhisherdil1@gmail.com</h4>
       <h4>Posts : 6</h4>
    </div>
        </div>  




    </div>
  )
}

export default BlogPoster
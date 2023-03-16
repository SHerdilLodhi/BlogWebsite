import { Button, SpeedDial } from '@mui/material'
import React, { useState } from 'react'
import SpeedDialComp from "../../Data/SpeedDIal/SpeedDialComp"
import "./AddBlog.css"


export default function AddBlog() {
    const [image, setimage] = useState(null)
    const [blogData, setblogData] = useState({title:"",description:""})

    const BlogData=(e)=>
    {
       setblogData({...blogData, [e.target.name]:e.target.value})
    }
  return (
    <div className='addblog'>
       <div className="addblog-data">
         <textarea className='area1' name='title' placeholder='Title' rows="2" cols="100" type="text" onChange={BlogData} />
        <textarea className='area2' name='description' placeholder='Write Your Story...' rows="16" cols="100"type="text" onChange={BlogData}/>
        </div> 
       
        <div className="addblog-button">
         <SpeedDialComp setblogData={setblogData} blogData={blogData} BlogData={BlogData} setimage={setimage}/>
         <Button className='addblog-button-button' variant="contained" onClick={()=>console.log(blogData,image)}>Publish</Button></div>
    </div>
  )
}




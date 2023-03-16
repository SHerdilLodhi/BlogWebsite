import React, { useState } from 'react';
import './Signup.css';
import {useNavigate} from "react-router-dom"
const Signup = () => {
  const [userdata, setuserdata] = useState({name:"",email:"",password:""})
  const [image, setimage] = useState(null)
  let nav = useNavigate()
  
  
  return (
    <div className="signup-container">
      <h1 style={{textAlign:"center"}}>Sign Up</h1>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input onChange={(e)=>setuserdata({...userdata, name:e.target.value})} type="text" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input onChange={(e)=>setuserdata({...userdata, email:e.target.value})} type="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input onChange={(e)=>setuserdata({...userdata, password:e.target.value})} type="password" placeholder="Enter your password" />
        </div>
        <div className="form-group">
          <label>Upload Image</label>
          <input onChange={(e)=>setuserdata(setimage(e.target.files[0]))} type="file" placeholder="Confirm your password" />
        </div>
        <div className="signup-button">

        <button type="submit" onClick={()=>nav("/login")}>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;

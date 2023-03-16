import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { MyContext } from '../../../Context';
const Login = () => {
let nav = useNavigate()
let userdetails = localStorage.getItem("userLoggedIn") 

const [username, setUsername] = useState("")
const [password, setpassword] = useState("")

const {Login} = useContext(MyContext)
// console.log(Login);


const LoginFunc=()=>{
  
 let user = {
    name:username,
    email:"lodhi1@gmail.com",
    password:password
  }
  if(username != "" && password!= "")
  {

    Login(user)
    nav('/home')
  }
  else return alert("Fill Login Properly")
}
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
          <input type="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
          <input type="submit" value="Login" onClick={()=>LoginFunc()}/>
        </form>
      </div>
    </div>
  );
};

export default Login;
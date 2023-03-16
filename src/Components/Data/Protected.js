import React, { useContext, useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { MyContext } from '../../Context'

export default function Protected(props) {
  const {user} = useContext(MyContext)
   
  return (
    <>
  {
    user?<Outlet/>:<Navigate to={"/login"}/>
  }
  </>
  )
}

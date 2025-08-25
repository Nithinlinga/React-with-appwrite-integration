import React from 'react'
import {useDispatch} from 'react-redux'
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
const LogoutBtn = () => {
    const dispatch=useDispatch()
    const logoutClick=()=>{
        authService.logout().then(()=>{
            useDispatch(logout())
        })
    }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={logoutClick}>Logout</button>
  )
}

export default LogoutBtn
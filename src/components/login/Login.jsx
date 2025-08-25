import React, { useState } from 'react'
import { useNavigate, useSubmit } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth';
import {login as authLogin} from '../../store/authSlice'

const Login = () => {

    const navigate=useNavigate();
    const dispatch=useDispatch()
    const {register, handleSubmit}=useSubmit();
    const [error,setError]=useState("");

    const login=async(data)=>{
        setError("")
        try {
            const session=await authService.login(data);
            if(session){
                const {userData}= await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData))
                    navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div className='flex items-center justify-center w-full'>

        <div className={`mx-auto flex justify-center`}>
            <span className='inline-block w-full max-w-[100px]'>
                <Logo/>
            </span>
            <h2>Sign in to your account</h2>
        </div>
    </div>
  )
}

export default Login
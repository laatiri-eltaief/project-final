import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Spinner} from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { userRegister } from '../Actions/AuthAction';
import { useState } from 'react';

const Register = () => {
    const [userInfo, setUserInfo] = useState({
      firstName:"",
      lastName:"",
      email:"",
      password:""
    })
    const dispatch=useDispatch()
    const navigate=useNavigate()
  const loading=useSelector(state=>state.AutoReducer.loading)
  const handlechange=(e)=> {
    setUserInfo({...userInfo,[e.target.name]:e.target.value})
  }
  return (
    <div>
      <input type="text" placeholder="firstName" onChange={handlechange}name="firstName"/>
      <input type="text" placeholder="lastName" onChange={handlechange}name="lastName"/>
      <input type="text" placeholder="email" onChange={handlechange}name="email"/>
      <input type="password" placeholder="password" onChange={handlechange}name="password"/>
      <button onClick={()=>dispatch(userRegister(userInfo,navigate))}> { loading ? <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner> : "Register"}</button>
    </div>
  )
}

export default Register

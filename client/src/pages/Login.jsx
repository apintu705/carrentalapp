import React from 'react'
import { useState } from 'react';
import {useDispatch} from "react-redux"
import { Layout } from '../components/Layout'
import { userlogin } from '../redux/actions/user';

export const Login = () => {
  const dispatch=useDispatch();
  const[formdata,setformdata]=useState({
    username:"",
    password:"",
  })
  const handlechange=(e)=>{
    setformdata({...formdata,[e.target.id]:e.target.value})
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
    dispatch(userlogin(formdata))
  }
  return (
    <Layout>
      <div className="form-container">
        <div className="form-groups">
          <form action="" className="form" onSubmit={(e)=>handlesubmit(e)}>
            <h1 className="form-title">Login</h1>
            <div className="form-group">
            <label htmlFor="username">Username</label>
              <input type="text" className="input" id="username" onChange={(e)=>handlechange(e)} required/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="input" id="password" onChange={(e)=>handlechange(e)} required/>
            </div>
            <div className="form-group">
            <button type="submit" className="rent-now">Login</button>
            </div>
            <div className="form-group">
              <p>Don't have an account ? <a href="/register" className="form-link">click here for Register</a></p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

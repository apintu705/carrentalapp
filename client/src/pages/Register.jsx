import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { Layout } from '../components/Layout'
import { userregister } from '../redux/actions/user';

export const Register = () => {

  const dispatch=useDispatch();
  const[formdata,setformdata]=useState({
    username:"",
    password:"",
    rpassword:""
  })
  const handlechange=(e)=>{
    setformdata({...formdata,[e.target.id]:e.target.value})
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
    dispatch(userregister(formdata))
  }


  return (
    <Layout>
      <div className="form-container">
        <div className="form-groups">
          <form action="" className="form" onSubmit={(e)=>handlesubmit(e)}>
            <h1 className="form-title">Register</h1>
            <div className="form-group">
            <label htmlFor="username">Username</label>
              <input type="text" className="input" id="username" onChange={(e)=>handlechange(e)} required/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="input" id="password" onChange={(e)=>handlechange(e)} required/>
            </div>
            <div className="form-group">
              <label htmlFor="rpassword">Retype-Password</label>
              <input type="password" className="input" id="rpassword" onChange={(e)=>handlechange(e)} required/>
            </div>
            
            <div className="form-group">
            <button type="submit" className="rent-now">Register</button>
            </div>
            <div className="form-group">
              <p>If you have an account ? <a href="/login" className="form-link">click here to Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

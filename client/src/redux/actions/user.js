import axios from 'axios';
import {toast} from "react-toastify"

export const userregister=(formdata)=>async(dispatch)=>{
    dispatch({type:"LOADING",payload:true})
    try{
        let {data}=await axios.post("http://localhost:8080/api/user/register",formdata)
        // localStorage.setItem("User",JSON.stringify(data))
        toast.success("Registation successfull !")
        dispatch({type:"LOADING",payload:false})
    }
    catch(error){
        console.error(error)
        toast.error("Error Try again !")
        dispatch({type:"LOADING",payload:false})
    }
}

export const userlogin=(formdata)=>async(dispatch)=>{
    dispatch({type:"LOADING",payload:true})
    try{
        let {data}=await axios.post("http://localhost:8080/api/user/login",formdata)
        localStorage.setItem("User",JSON.stringify(data))
        toast.success("Login successfull !")
        dispatch({type:"LOADING",payload:false})
    }
    catch(error){
        console.error(error)
        toast.error("Error Try again !")
        dispatch({type:"LOADING",payload:false})
    }
}
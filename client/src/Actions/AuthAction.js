import { LOGIN_FAILED,LOGIN_REQUEST,LOGIN_SUCCESS,REGISTER_FAILED, REGISTER_REQUEST,REGISTER_SUCCESS} from "./Types";
import axios from 'axios'
import { Navigate } from "react-router";
export const userLogin=(userInfo)=>async(dispatch)=>{
    try{
dispatch({
    type:LOGIN_REQUEST
})
const res=await axios.post('http://localhost:5000/api/users/Login',userInfo)
dispatch({
    type:LOGIN_SUCCESS,
    payload:res.data 
})
    }
    catch(error){
        dispatch({
            type:LOGIN_FAILED,
            payload:error.response.data.errors
        })

    }
}

export const userRegister=(userInfo,navigate)=>async(dispatch)=>{
    try{
dispatch({
    type:REGISTER_REQUEST,
})
const res=await axios.post('http://localhost:5000/api/users/Register',userInfo)
dispatch({
    type:REGISTER_SUCCESS,
    payload:res.data 
})
Navigate('/Login')
    }
    catch(error){
        dispatch({
            type:REGISTER_FAILED,
            payload:error.response.data.errors
        })

    }
}
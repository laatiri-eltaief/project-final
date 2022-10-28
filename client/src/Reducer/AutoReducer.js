import { LOGIN_FAILED,LOGIN_REQUEST,LOGIN_SUCCESS,REGISTER_FAILED, REGISTER_REQUEST,REGISTER_SUCCESS} from "../Actions/Types";
const init={
    isAuth:false,
    token:localStorage.getItem('token') || null,
    loading:false,
    userInfo:JSON.parse(localStorage.getItem('userInfo')) || {},
    errors:null,
}
const  AutoReducer=(state=init,{Type,payload})=>{
    switch (Type) {

case LOGIN_REQUEST:return {...state,loading:true}
case LOGIN_SUCCESS:
    localStorage.setItem('token,payload.token')
    localStorage.setItem('userInfo',JSON.stringify(payload.user))
    return {...state,loading:false,isAuth:true,token:payload.token,errors:null}
case LOGIN_FAILED:return {...state,loading:false,isAuth:false,token:null.token,errors:payload}

case REGISTER_REQUEST:return {...state,loading:true}
case REGISTER_SUCCESS:return {...state,loading:false,isAuth:false,token:payload.token,errors:null,userInfo:payload.user}
case REGISTER_FAILED:return {...state,loading:false,isAuth:false,token:null.token,errors:payload}
        default:return state

    }
}
export default AutoReducer
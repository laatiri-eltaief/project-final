import { ADD_Activity ,GET_Activity  } from "./TypesAction"
import axios from "axios"
import { useDispatch } from 'react-redux'

export const addActivity = (newActivity) =>(dispatch) =>{
    
  axios
        .post("http://localhost:5000/addActivity",newActivity)
        .then(({data}) => dispatch({
                type:ADD_Activity,
                payload:data,
            }))
        .catch((err) => {
            alert("ERROR IN ADD NEW Activity")
        });
    
        
        
};

export const  getActivity = () =>(dispatch) =>{
    axios.get("http://localhost:5000/Activity")
       .then(({data}) => dispatch({
            type:GET_Activity,
            payload:data,
        }))
    .catch(err=>{alert("ERROR IN GET Activity")})
}



export const deleteActivity = (id)=> (dispatch) =>{
    axios
    .delete(`http://localhost:5000/delete/${id}`)
    .then(() => dispatch(getActivity()))
    .catch(err=>{alert("ERROR Deleteting")})
}
 export const updateActivity=(id,newData)=>(dispatch)=>{
   console.log("hello");
   axios
  .patch(`http://localhost:5000/updateActivity/${id}`,newData)
    .then(()=> dispatch(getActivity()))
    .catch((err)=>{alert("ERROR updating Activity")})
    
}

export const edditActivityById = (id, editActivity) => (dispatch) => {
    axios
      .put(`http://localhost:5000/updateActivity/${id}`, editActivity)
      .then((re) => dispatch(getActivity()));
  };
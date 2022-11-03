import React from 'react';
import { ADD_ACTIVITY,GET_ACTIVITY, } from '../Actions/TypesAction';


const ActivityReducer = (state= InitState ,{Activity:[]} ,{type,payload} )=>{
    switch(type){
    case ADD_ACTIVITY:
        return {...state,Activity:[...state.Activity,payload]}
    case GET_Activity:
        return {...state,Activity:payload}
    default:
        return state;
}}
export default ActivityReducer
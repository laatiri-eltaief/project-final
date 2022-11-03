//  import React,{ useEffect,useState } from 'react'
// import { useSelector,useDispatch } from 'react-redux'
// import{ getActivity, deleteActivity,updateActivity} from "../Actions/ActivityAction"
// import { Button , Modal} from 'react-bootstrap'

//  const ActivityList = () => {
    
//      const users = useSelector(state => state.ActivityReducer.Activity);
//      const dispatch = useDispatch();
//      const [form,setForm] = useState(
//         { activityName:"",hostName:"",image:"", activityTime:""}
//       )
//       const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//      const handleShow = () => setShow(true);
//     useEffect(()=>{
//          dispatch(getActivity(),[])
//      })
//    return (
    

//     <div>
//         <Button variant="primary" onClick={handleShow}>
//         Edit
//        </Button> 
        
        
//          {Activity.map((el)=>
//          <div key={el.id}>
//             <p>activityName:{el.activityName}</p>
//              <p> hostName:{el. hostName}</p>
//              <p>activityTime:{el.activityTime}</p>
//              <p>image:{el.image}</p>


//             { <button onClick={()=>{dispatch(deleteuser(el._id))}}>DELETE</button> }
//             { <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//            <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//          <Modal.Body>
//             <label></label>
//             <input></input>
//          </Modal.Body>
//         <Modal.Footer>
//            <Button variant="secondary" onClick={handleClose}>
//              Close
//            </Button>
//            <Button variant="primary" onClick={dispatch(updateuser())}>
//             Save Changes
//           </Button>
//          </Modal.Footer>
//       </Modal> }  
//         </div>
//         )}
// //     </div>
//   )
//  }

//  export default ActivityList
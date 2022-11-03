// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Table}from 'react-bootstrap'

// import ModeEditIcon from '@mui/icons-material/ModeEdit';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import { useSelector,useDispatch } from 'react-redux'
// import { useEffect,useState } from 'react'
// import{ getActivity,deleteActivity,edditActivityById} from "../Actions/ActivityAction"
// import { Modal, Button, Form } from "react-bootstrap";


// const ActivityTable = () => {
//     const Activity = useSelector(state => state.ActivityrReducer.Activity);
//     const [newupdate,setNewupdate]=useState({
//         "activityName":"",
//         "hostName":"",
//         " activityTime":"",
//         " image":""
//     })


//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     const dispatch = useDispatch();
//     const handleChange = (e) => {
    
//         setNewupdate({ ...newupdate, [e.target.name]: e.target.value });
//         e.preventDefault();
//       };
//     useEffect(()=>{
//         dispatch(getActivity(),[])
//     },[])
//   return (
//     <div>
        
//          <Table striped bordered hover>
//   <thead>
//     <tr>
//       <th>Id</th>
//       <th>activityName</th>
//       <th>hostName</th>
//       <th>activityTime</th>
//       <th>image</th>
//     </tr>
//   </thead>
//   {Activity.map((el)=>
//   <tbody>
//     <tr>
//       <td key={el._id}>{el._id}</td>
//       <td>{el.activityName}</td>
//       <td>{el.hostName}</td>
//       <td>{el.activityTime}</td>
//       <td>{el.image}</td>

//             <td>
//                 <Button variant="contained" style={{backgroundColor:"rgb(33,37,41)",marginRight:"20px",color:"white"}} startIcon={<ModeEditIcon />} onClick={handleShow}>
//                        EDIT
//                 </Button>


//                 <Button variant="contained" style={{backgroundColor:"rgb(33,37,41)",color:"white"}} startIcon={<DeleteForeverIcon />} onClick={()=>{dispatch(deleteActivity(el._id))}}>
//                     DELETE
//                 </Button>

//             </td>
//     </tr>
//     <Modal show={show} onHide={handleClose}>
//   <Modal.Header closeButton>
//     <Modal.Title>EDIT Activity</Modal.Title>
//   </Modal.Header>
//   <Modal.Body>
//     <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>activityName:</Form.Label>
//         <Form.Control type="text" placeholder="Enter your activityName"name="activityName" value={el.activityName}onChange={handleChange}/>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>hostName:</Form.Label>
//         <Form.Control type="text" placeholder="Enter your hostName" name="hostName" value={el.hostName}onChange={handleChange}/>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicEmail" >
//         <Form.Label>activityTime:</Form.Label>
//         <Form.Control type="text" placeholder="Enter your activityTime" name="activityTime" value={el.activityTime}onChange={handleChange}/>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>image:</Form.Label>
//         <Form.Control type="text" placeholder="Enter your image"name="image" value={el.image}onChange={handleChange} />
//       </Form.Group>


//       <Modal.Footer>
//     <Button variant="secondary" onClick={handleClose}>
//       cancel
//     </Button>
//     <Button variant="primary" type="submit"  onClick={()=>
//                     {dispatch(edditActivityById(el._id,newupdate))}}>
//         EDIT
//       </Button>
//   </Modal.Footer>
//     </Form>
//   </Modal.Body>
  
// </Modal>
//   </tbody>
  
//   )}
// </Table>
//     </div>
//   )
// }

// export default ActivityTable
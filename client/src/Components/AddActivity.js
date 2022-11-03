//  import React, { useState } from 'react';
//   import { Button, Modal } from 'react-bootstrap';


//  function addActivity({addActivity}) {
//      const [show, setShow] = useState(false);
//      const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//      const [activityName,setactivityName] = useState("");
//       const [ hostName, setHostName] = useState("");
//     const [  image, setImagel] = useState("");
//       const [activityTime , setActivityTime ] = useState(0);
   
//   return (
//     <div>
//         <>
//           <Button className='bttn' style={{background:'black', color:"white"}} variant="primary" onClick={handleShow}>
//          Add New Activity
//        </Button>
//        <Modal show={show} onHide={handleClose} animation={false}>
//     <Modal.Header closeButton>
//     <Modal.activityName>Add Activity</Modal.activityName>
//   </Modal.Header>
//    <label>activityName</label>
//         <input type="text" value={activityName} onChange={(event)=>setActivityName(event.target.value)}></input>
//         <label>hostName</label>
//        <input type="text" value={hostName} onChange={(event)=>setHostName(event.target.value)}></input>
//         <label>image</label>
//        <input type="text" value={image} onChange={(event)=>setImage(event.target.value)}></input>
//        <label>activityTime</label>
//        <input type="number" value={activityTime} onChange={(event)=>setActivityTime(event.target.value)}></input>

//    <Modal.Body>
//      <p>Modal body text goes here.</p>
//    </Modal.Body>

//    <Modal.Footer>
//     <Button variant="secondary" onClick={handleClose}>Close</Button>
//     <Button variant="primary" onClick={()=>{addActivity({id:Math.random(),activityName,hostName,image,activityTime});handleClose()}}>Add</Button>
//    </Modal.Footer>
//  </Modal> 
//  </>
//      </div>
//     )
//   }

//   export default addActivity
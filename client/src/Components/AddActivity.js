// import React, { useState } from 'react';
//  import { Button, Modal } from 'react-bootstrap';


// function addActivity({addActivity}) {
//     const [show, setShow] = useState(false);
//      const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//      const [title,setTitle] = useState("");
//      const [host, setHost] = useState("");
//     const [posterUrl, setPosterUrl] = useState("");
//      const [hourly, setHourly] = useState(0);
   
//   return (
//     <div>
//         <>
//          <Button className='bttn' style={{background:'black', color:"white"}} variant="primary" onClick={handleShow}>
//          Add New Activity
//        </Button>
//        <Modal show={show} onHide={handleClose} animation={false}>
//    <Modal.Header closeButton>
//     <Modal.Title>Add Activity</Modal.Title>
//   </Modal.Header>
//    <label>Title</label>
//         <input type="text" value={title} onChange={(event)=>setTitle(event.target.value)}></input>
//        <label>Host</label>
//        <input type="text" value={host} onChange={(event)=>setHost(event.target.value)}></input>
//        <label>PosterURL</label>
//        <input type="text" value={posterUrl} onChange={(event)=>setPosterUrl(event.target.value)}></input>
//        <label>Hourly</label>
//         <input type="number" value={hourly} onChange={(event)=>setHourly(event.target.value)}></input>

//    <Modal.Body>
//     <p>Modal body text goes here.</p>
//   </Modal.Body>

//    <Modal.Footer>
//     <Button variant="secondary" onClick={handleClose}>Close</Button>
//     <Button variant="primary" onClick={()=>{addActivity({id:Math.random(),title,host,posterUrl,hourly});handleClose()}}>Add</Button>
//   </Modal.Footer>
//  </Modal> 
//  </>
//     </div>
//    )
//  }

//  export default addActivity
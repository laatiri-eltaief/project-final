 import React from 'react'
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
 import { Link } from "react-router-dom";
//import addActivity from './AddActivity';

 function Nave({search,setSearch,Activity,setActivity}) {
 const addActivity=(newActivity)=>(setActivity([...Activity,newActivity]))
 return (
    <div style={{textAlign:'center'}} className='Nav'> 
     <Navbar bg="light" expand="lg">
    <Container fluid>
    <Navbar.Brand href="#" style={{textDecoration:"none"}}><h1 >MDJ</h1> </Navbar.Brand>
    <Navbar.Collapse id="navbarScroll">
  <Nav
          style={{ maxHeight: '200px' }} 
          className='Nav1'
         navbarScroll
       >
        <Link to='/'>Home</Link>
         <Link to='/About' >About</Link>
        <Link to='/Contact' >Contact</Link>
        <Link to='/Activity' >Activity</Link>
        
     </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
        className="me-2"
         aria-label="Search"
         value={search} onChange={(e)=>setSearch(e.target.value)}
      />
 
    </Form>
    </Navbar.Collapse>
 </Container>
 </Navbar>
     </div>
      )
 }

  export default Nave
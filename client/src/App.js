import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Login from './Components/Login';
import Register from './Components/Register';
import { Routes,Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Data} from './Data';
import Search from './Components/Search';
//import ActivityL from './Components/ActivityL';
//import AddActivity from './Components/AddActivity';
//import ActivityList from './Components/ActivityList';
//import Host from './Components/Host';
import Home from './Navbar/Home';
import About from './Navbar/About';
import Contact from './Navbar/Contact';
import Activity from './Navbar/Activity';
//import ActivityTable from './Components/ActivityTable';
 import Nave from './Components/Nave';
 import MyComponent from './Components/MyComponent';

function App() {
   const user=useSelector(state=>state.AuthReducer)
    //const [activity, setActivity] = useState(Data)
    const [search,setSearch]=useState ("")
  const [hourly, setHourly] = useState(0)
  //const AddActivity=(newM)=>setActivity([...Activity,newM])
  
  return (
    <div className="App">
        <Nave search={search} setSearch={setSearch} setHourly={setHourly}/>  
      {/* <AddActivity AddActivity={AddActivity}/>  */}
      {/* <ActivityL Activity={Activity} search={search} hourly={hourly} />    */}

         <Routes> 
        
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Activity' element={<Activity/>}/>
        <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/MyComponent' element={<MyComponent/>}/>
          {/* <Route path='/activityTable'element={<ActivityTable/>}/> */}
          {/* <Route path='/Host'element={<Host/>}/> 
         Route path='/Activity' element={<Activitylist Activity={Activity} search={search}
        <Route path='/Activity/:id' element={<Host Activity={Activity}/>}/>  */}
        {/* <Route path='/activity' element={<ActivityL activity={activity} search={search}/>}/>
        <Route path='/activity/:id' element={<hostName activity={activity} />}/> */}
        </Routes>
         {/* <MyComponent/>   */}
        
    </div>
  );
}

export default App;


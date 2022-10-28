import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import Login from './Components/Login';
import Register from './Components/Register';
import { Routes,Route } from 'react-router';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const user=useSelector(state=>state.AuthReducer)
  return (
    <div className="App">
     <Navbar/>
        <Routes>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
        </Routes>
    </div>
  );
}

export default App;


import logo from './logo.svg';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Navbar from './MyntraWeb/Navbar';
import Home from './MyntraWeb/Home';
import Register from './MyntraWeb/Register';
import Login from './MyntraWeb/Login';
import Multipleproduct from './MyntraWeb/Multipleproduct';
import Addproduct from './MyntraWeb/Addproduct';
import Singleproduct from './MyntraWeb/Singleproduct';
import Cart from './MyntraWeb/Cart';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
       <Route exact path='/' element={<Home/>} />
       <Route exact path='/Register' element={<Register/>}/>
       <Route exact path='/Login' element={<Login/>}/>
       <Route exact path='/Login' element={<Login/>}/>
       <Route exact path='/Multipleproduct' element={<Multipleproduct/>}/>
       <Route exact path='/Addproduct' element={<Addproduct/>}/>
       <Route exact path='/Singleproduct' element={<Singleproduct/>}/>
       <Route exact path='/Cart' element={<Cart/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

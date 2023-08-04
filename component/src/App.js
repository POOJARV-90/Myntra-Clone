import logo from './logo.svg';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Navbar from './MyntraWeb/Navbar';
import Home from './MyntraWeb/Home';
import Register from './MyntraWeb/Register';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
       <Route exact path='/' element={<Home/>} />
       <Route exact path='/Register' element={<Register/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

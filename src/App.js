import React from 'react'
import './App.css';
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product/Product';
import NavBar from './components/NavBar/NavBar';
import Contacto from './components/Contacto/Contacto';


function App() {
  const location = useLocation()

  return (
    <div className="App">


      {
        location.pathname === '/' ? <Landing/> : <div> </div>
      }

      <NavBar/>

      <Routes>
        <Route exact path='/producto' element={<Product/>}/>
        <Route exact path='/inicio' element={<Home/>}/>
        <Route exact path='/contacto' element={<Contacto/>}/>
        
      </Routes>
      
    </div>
  );
}

export default App;

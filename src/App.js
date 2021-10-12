import React from 'react';


import Home from './Home';
import Footer from './components/Footer';



export default function App() {
  return (
  
    <div >
      <div class="jumbotron text-center">
      <h1>DEPT COLLECTORS</h1>
      <p>Trusted collectors</p>
      <button className = "btn btn-primary" type="button" >Click</button>
      <button className = "btn btn-primary" type="button" >Click</button>
      <button className = "btn btn-primary" type="button" >Click</button>
      <button className = "btn btn-primary" type="button" >Click</button>
    </div>
      

    <Home/>
    <Footer/>
    </div>
  );
}
import React from 'react';
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
  <div className="nav">
    
      <Link to="home"><h3>Home</h3></Link>
    
    
      <Link to="about"><h3>About</h3></Link>
    
      <Link to="contact"><h3>Contact</h3></Link>
    
  </div>
  );
}
export default Navbar;
//import dependencies
import React, {Component} from 'react';
import {  NavLink } from 'react-router-dom';


// Create a component named Nav
class Nav extends Component {


   
// Render and return users to correct content using NavLinks
render () {
  return (
 
      <nav className='main-nav'>
        <ul>
        <li><NavLink  to="/dog" >dog</NavLink></li>
          <li><NavLink to="/rabbit">rabbit</NavLink></li>
          <li><NavLink to='/koala' >koala</NavLink></li>
       </ul>
       </nav>




  )
};
}


export default Nav;
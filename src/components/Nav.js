import React, {Component} from 'react';
import {  NavLink } from 'react-router-dom';


class Nav extends Component {

   // constructor() {
   //    super()
   //    this.state={
   //       onClick:''
   //    }
   // }

   

render () {
  return (
 
      <nav className='main-nav'>
        <ul>
        <li><NavLink  to="/dog" >dog</NavLink></li>
          <li><NavLink to="/rabbit" >rabbit</NavLink></li>
          <li><NavLink to='/koala' >koala</NavLink></li>
       </ul>
       </nav>




  )
};
}


export default Nav;
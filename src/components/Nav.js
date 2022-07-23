import React, {Component} from 'react';
import {  NavLink } from 'react-router-dom';


class Nav extends Component {

   constructor() {
      super()
      this.state={
         onClick:''
      }
   }

   

render () {
  return (
 
      <nav className='main-nav'>
        <ul>
        <li><NavLink exact to="/outerspace" onClick={this.handleClick}>outerspace </NavLink></li>
          <li><NavLink to="/ocean" onClick={this.onClick}>ocean</NavLink></li>
          <li><NavLink to='/jungle' onClick={this.handleClick}>jungle</NavLink></li>
       </ul>
       </nav>




  )
};
}


export default Nav;
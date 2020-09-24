import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';


class Nav extends React.Component {
  render() {
    return (
      <div className='Nav'>
        <div className="Nav-left">
          <NavLink exact to='/'>
            <h1 className='Nav-shortly '>Shortly</h1>

          </NavLink>
          <NavLink exact activeClassName='Navbar-active' to='/features' >
            Features
          </NavLink>
          <NavLink exact activeClassName='Navbar-active' to='/pricing' >
            Pricing
          </NavLink>
          <NavLink exact activeClassName='Navbar-active' to='/resources' >
            Resources
          </NavLink>
        </div>
        
        <div className='Nav-right'>
          <NavLink exact activeClassName='Navbar-active' to='/login' >
            Login
          </NavLink>
          
          <NavLink exact activeClassName='Navbar-active' to='/signup' >
            <button className='Nav-button'>
              Sign Up
              </button>
            </NavLink>
        </div>
        
      </div>
    )
  }
}

export default Nav;
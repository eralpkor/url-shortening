import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

// Features
//   Pricing
//   Resources

//   Login
//   Sign Up

class Nav extends React.Component {
  render() {
    return (
      <div className='Nav'>
        <div className="Nav-left">
          <NavLink exact activeClassName='Nav-shortly' to='/' >
            Shortly
          </NavLink>
          <NavLink exact activeClassName='Navbar-active' to='/' >
            Features
          </NavLink>
          <NavLink exact activeClassName='Navbar-active' to='/' >
            Pricing
          </NavLink>
          <NavLink exact activeClassName='Navbar-active' to='/' >
            Resources
          </NavLink>
        </div>
        
        <div className='Nav-right'>
          <NavLink exact activeClassName='Navbar-active' to='/' >
            Login
          </NavLink>
          
            <NavLink exact activeClassName='Navbar-active' to='/' >
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
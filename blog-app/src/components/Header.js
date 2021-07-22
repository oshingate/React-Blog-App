import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className='header'>
        <div className='container flex jsb'>
          <strong>Blog-App</strong>
          <ul className='flex header-nav'>
            <li>
              <NavLink className='btn btn-sec' to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className='btn btn-sec' to='/users/login'>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className='btn btn-sec' to='/users/signUp'>
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;

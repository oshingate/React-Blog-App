import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

function Header(props) {
  return (
    <header className='header'>
      <div className='container flex jsb'>
        <NavLink to='/'>
          {' '}
          <strong>Blog-App</strong>
        </NavLink>

        {!props.loggedUser ? (
          <ul className='flex header-nav'>
            <li>
              <NavLink
                className='btn btn-sec'
                to='/users/login'
                activeClassName='active'
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                className='btn btn-sec'
                to='/users/signUp'
                activeClassName='active'
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul className='flex header-nav'>
            <li>
              <NavLink
                className='btn btn-sec'
                to='/articles'
                activeClassName='active'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-folder-plus'
                  viewBox='0 0 16 16'
                >
                  <path d='m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z' />
                  <path d='M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z' />
                </svg>{' '}
                <span>New Post</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className='btn btn-sec'
                to='/settings'
                activeClassName='active'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-gear-fill'
                  viewBox='0 0 16 16'
                >
                  <path d='M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z' />
                </svg>
                <span>Settings</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className='btn btn-sec'
                to={`/profile/${props.loggedUser.username}`}
                activeClassName='active'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-person-circle'
                  viewBox='0 0 16 16'
                >
                  <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
                  <path
                    fillRule='evenodd'
                    d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z'
                  />
                </svg>
                <span>{props.loggedUser.username}</span>
              </NavLink>
            </li>
            <li>
              <button
                onClick={(event) => {
                  props.logoutUser(props.history);
                }}
                className='btn btn-sec'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-box-arrow-right'
                  viewBox='0 0 16 16'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z'
                  />
                  <path
                    fillRule='evenodd'
                    d='M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z'
                  />
                </svg>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}

export default withRouter(Header);

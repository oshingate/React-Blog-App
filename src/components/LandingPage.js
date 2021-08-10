import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { User_URL } from '../utils/constants';
import { UserProvider } from '../utils/UserContext';
import Header from './landingPage/Header';
import Home from './landingPage/Home';
import Login from './landingPage/Login';
import SignUp from './landingPage/SignUp';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      loggedUser: null,
    };
  }
  componentDidMount() {
    let token = localStorage.getItem('token');

    if (token)
      fetch(User_URL, {
        method: 'GET',
        headers: {
          Authorization: token,
        },
      })
        .then((res) => res.json())
        .then((loggedUser) => {
          this.setState((prevState) => {
            return {
              token: localStorage.token,
              loggedUser: loggedUser.user,
            };
          });
        });
  }

  updateLoggedUser = (data) => {
    localStorage.setItem('token', data.token);

    this.setState({ token: data.token, loggedUser: data.user });
  };

  logoutUser = (history) => {
    localStorage.setItem('token', null);

    this.setState({ token: null, loggedUser: null });
    history.push('/');
  };

  render() {
    let data = {
      token: this.state.token,
      loggedUser: this.state.loggedUser,
    };

    return (
      <UserProvider value={data}>
        <Header
          token={this.state.token}
          loggedUser={this.state.loggedUser}
          logoutUser={this.logoutUser}
        />
        <main>
          {' '}
          <Route path='/'>
            <Home token={this.state.token} />
          </Route>
          <Route path='/users/login' exact>
            <Login updateLoggedUser={this.updateLoggedUser} />
          </Route>
          <Route path='/users/signup' exact>
            <SignUp />
          </Route>
        </main>
      </UserProvider>
    );
  }
}

export default LandingPage;

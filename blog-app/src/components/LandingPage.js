import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      loggedUser: null,
    };
  }

  updateLoggedUser = (data) => {
    this.setState({ token: data.token, loggedUser: data.user });
  };

  logoutUser = () => {
    this.setState({ token: null, loggedUser: null });
  };

  render() {
    return (
      <>
        <Header token={this.state.token} loggedUser={this.state.loggedUser} />
        <main>
          <Route path='/'>
            <Home
              token={this.state.token}
              loggedUser={this.state.loggedUser}
              logoutUser={this.logoutUser}
            />
          </Route>
          <Route path='/users/login' exact>
            <Login updateLoggedUser={this.updateLoggedUser} />
          </Route>
          <Route path='/users/signup' exact>
            <SignUp />
          </Route>
        </main>
      </>
    );
  }
}

export default LandingPage;

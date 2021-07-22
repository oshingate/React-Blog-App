import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/users/login' exact>
            <Login />
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

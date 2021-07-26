import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLoginUser = (event) => {
    event.preventDefault();
    let data = {
      email: event.target.email.value,

      password: event.target.password.value,
    };

    if (data.email && data.password) {
      fetch('http://localhost:4000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((user) => {
          console.log(user);

          this.props.updateLoggedUser(user);
          this.props.history.push('/');
        });
    }
  };

  render() {
    return (
      <section className='login-sec'>
        <h2 className='sec-heading'>Login Page</h2>
        <div className='container '>
          <form onSubmit={(event) => this.handleLoginUser(event)}>
            <fieldset>
              <label>Enter Email</label>
              <input type='email' name='email' id='loginEmail' />
              <span></span>
            </fieldset>
            <fieldset>
              <label>Enter Password</label>
              <input type='text' name='password' id='loginPassword' />
              <span></span>
            </fieldset>
            <fieldset className='flex center'>
              <button type='submit' className='btn btn-ter'>
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </section>
    );
  }
}

export default withRouter(Login);

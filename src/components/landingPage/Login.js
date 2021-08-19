import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Login_URL } from '../../utils/constants';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        email: '',
        password: '',
      },
      data: { email: '', password: '' },
    };
  }

  handleChange = (event, field) => {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        ...prevState,
        data: {
          ...prevState.data,
          [field]: event.target.value,
        },
      };
    });
  };

  handleLoginUser = (event) => {
    event.preventDefault();
    let data = {
      email: event.target.email.value,

      password: event.target.password.value,
    };

    fetch(Login_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((errors) => {
            return Promise.reject(errors);
          });
        }
        return res.json();
      })
      .then((user) => {
        this.props.updateLoggedUser(user);
        this.props.history.push('/');
      })
      .catch((errors) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            errors: errors,
          };
        });
      });
  };

  render() {
    return (
      <section className='login-sec'>
        <h2 className='sec-heading'>Login Page</h2>
        <div className='container '>
          <form onSubmit={(event) => this.handleLoginUser(event)}>
            <fieldset>
              <label>Enter Email</label>
              <input
                type='email'
                name='email'
                id='loginEmail'
                value={this.state.data.email}
                onChange={(event) => {
                  this.handleChange(event, 'email');
                }}
              />
              <span>{this.state.errors.email}</span>
            </fieldset>
            <fieldset>
              <label>Enter Password</label>
              <input
                type='password'
                name='password'
                id='loginPassword'
                value={this.state.data.password}
                onChange={(event) => {
                  this.handleChange(event, 'password');
                }}
              />
              <span>{this.state.errors.password}</span>
            </fieldset>
            <fieldset className='flex center'>
              <button type='submit' className='btn btn-pri'>
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

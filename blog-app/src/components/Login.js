import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className='login-sec'>
        <h2 className='sec-heading'>Login Page</h2>
        <div className='container '>
          <form action=''>
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

export default Login;

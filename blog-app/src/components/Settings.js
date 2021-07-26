import React, { Component } from 'react';
import Loader from './Loader';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    let token = this.props.token;

    fetch('http://localhost:4000/api/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((user) => {
        this.setState({ user });
      });
  }

  //updateUserData
  updateUserData = (event) => {
    event.preventDefault();

    let data = {
      user: {
        image: event.target.image.value,
        username: event.target.username.value,
        bio: event.target.bio.value,
      },
    };
    console.log(data);
    fetch('http://localhost:4000/api/user', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.props.token,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((user) => {
        console.log('updated user', user);
        this.setState({ user: { user } });
      });
  };

  handleFormChange = (target, field) => {
    console.log(target.value, field);
    this.setState({
      user: {
        user: {
          [field]: target.value,
        },
      },
    });
  };

  render() {
    return (
      <>
        {this.state.user ? (
          <section className='settings-sec sec-padding container'>
            <h2 className='sec-heading'>Your Settings</h2>

            <form
              onSubmit={(event) => {
                this.updateUserData(event);
              }}
            >
              <fieldset>
                <label htmlFor='image'></label>
                <input
                  type='text'
                  name='image'
                  id='userImg'
                  placeholder='URL of image '
                  value={this.state.user.user.image}
                  onChange={(event) => {
                    this.handleFormChange(event.target, 'image');
                  }}
                />
                <span></span>
              </fieldset>
              <fieldset>
                <label htmlFor='username'></label>
                <input
                  type='text'
                  name='username'
                  id='articleusername'
                  placeholder='Username '
                  value={this.state.user.user.username}
                  onChange={(event) => {
                    this.handleFormChange(event.target, 'username');
                  }}
                />
                <span></span>
              </fieldset>
              <fieldset>
                <label htmlFor='bio'></label>
                <textarea
                  name='bio'
                  id='articleBody'
                  cols='30'
                  rows='10'
                  placeholder='Short Bio About You'
                  value={this.state.user.user.bio}
                  onChange={(event) => {
                    this.handleFormChange(event.target, 'bio');
                  }}
                ></textarea>
                <span></span>
              </fieldset>
              <fieldset>
                <label htmlFor='email'></label>
                <input
                  type='text'
                  name='email'
                  id='articleEmail'
                  placeholder='Your Email'
                  disabled
                  value={this.state.user.user.email}
                />
                <span></span>
              </fieldset>

              <fieldset>
                <label htmlFor='password'></label>
                <input
                  type='text'
                  name='password'
                  id='articlepassword'
                  placeholder='New Password'
                  disabled
                />
                <span></span>
              </fieldset>

              <fieldset className='flex center'>
                <button type='submit' className='btn btn-pri'>
                  Submit
                </button>
              </fieldset>
            </form>
          </section>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

export default Settings;

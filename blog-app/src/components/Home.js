import React, { Component } from 'react';
import HomeMain from './HomeMain';
import { Route } from 'react-router-dom';
import SingleArticle from './SingleArticle';
import NewArticle from './NewArticle';
import Settings from './Settings';
import Profile from './Profile';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Route path='/' exact>
          {!this.props.token ? (
            <section className='hero-sec  '>
              <div className='flex center'>
                <h2 className='sec-heading'>Welcome to blog App</h2>
              </div>
            </section>
          ) : (
            ''
          )}

          <HomeMain />
        </Route>
        <Route
          path='/articles'
          exact
          render={(props) => <NewArticle {...props} token={this.props.token} />}
        />
        <Route
          path='/settings'
          exact
          render={(props) => (
            <Settings
              {...props}
              token={this.props.token}
              logoutUser={this.props.logoutUser}
            />
          )}
        />

        <Route path='/profile/:username'>
          <Profile />
        </Route>

        <Route
          path='/articles/:slug'
          render={(props) => (
            <SingleArticle {...props} token={this.props.token} />
          )}
        />
      </>
    );
  }
}

export default Home;

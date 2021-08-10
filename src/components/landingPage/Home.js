import React, { Component } from 'react';
import HomeMain from './home/HomeMain';
import { Route } from 'react-router-dom';
import SingleArticle from './home/SingleArticle';
import NewArticle from './home/NewArticle';
import Settings from './home/Settings';
import Profile from './home/Profile';

import UpdateArticle from './home/UpdateArticle';

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

        <Route path='/articles' exact render={(props) => <NewArticle />} />

        <Route path='/settings' exact render={(props) => <Settings />} />

        <Route path='/profile/:username'>
          <Profile />
        </Route>

        <Route
          path='/article/:slug/edit'
          render={(props) => <UpdateArticle />}
        />

        <Route
          path='/articles/:slug'
          render={(props) => <SingleArticle {...props} />}
        />
      </>
    );
  }
}

export default Home;

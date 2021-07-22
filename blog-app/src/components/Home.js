import React, { Component } from 'react';
import HomeMain from './HomeMain';
import { Route } from 'react-router-dom';
import SingleArticle from './SingleArticle';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Route path='/' exact>
          <section className='hero-sec  '>
            <div className='flex center'>
              <h2 className='sec-heading'>Welcome to blog App</h2>
            </div>
          </section>

          <HomeMain />
        </Route>
        <Route path='/articles/:slug' component={SingleArticle} />
      </>
    );
  }
}

export default Home;

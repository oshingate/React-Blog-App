import React, { useContext } from 'react';
import HomeMain from './home/HomeMain';
import { Route } from 'react-router-dom';
import SingleArticle from './home/SingleArticle';
import NewArticle from './home/NewArticle';
import Settings from './home/Settings';
import Profile from './home/Profile';

import UpdateArticle from './home/UpdateArticle';
import UserContext from '../../utils/UserContext';

function Home(props) {
  let { token } = useContext(UserContext);

  return (
    <>
      <Route path='/' exact>
        {!token ? (
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

      <Route path='/articles' exact>
        <NewArticle />
      </Route>

      <Route path='/settings' exact>
        <Settings />
      </Route>

      <Route path='/profile/:username'>
        <Profile />
      </Route>

      <Route path='/article/:slug/edit'>
        <UpdateArticle />
      </Route>

      <Route path='/articles/:slug'>
        <SingleArticle />
      </Route>
    </>
  );
}

export default Home;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import HomeArticle from './homeMain/HomeArticle';
import Loader from '../../Loader';
import { Profiles_URL } from '../../../utils/constants';
import UserContext from '../../../utils/UserContext';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      error: null,
      currentTag: 'my',
      itsMe: null,
      articles: null,
      following: null,
    };
  }

  static contextType = UserContext;

  //changeCurretTag
  changeCurretTag = (name) => {
    this.setState((prevState) => {
      return { ...prevState, currentTag: name };
    });
  };

  //function to get profileData

  profileData = (username, token, loggedUser) => {
    fetch(Profiles_URL + '/' + username, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            return Promise.reject(error);
          });
        }
        return res.json();
      })
      .then((user) => {
        this.setState((prevState) => {
          let itsMe = null;
          let following = null;

          if (loggedUser.username !== user.profile.username) {
            itsMe = false;

            if (user.profile.profile.followers.includes(loggedUser._id)) {
              following = true;
            } else {
              following = false;
            }
          } else {
            itsMe = true;
            following = false;
          }
          return {
            ...prevState,
            user: user.profile,
            itsMe: itsMe,
            following: following,
          };
        });
      })
      .catch((error) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            error: error.error,
          };
        });
      });
  };

  //cdm
  componentDidMount() {
    let { token, loggedUser } = this.context;

    let username = this.props.match.params.username;

    this.profileData(username, token, loggedUser);
  }

  //cdu
  componentDidUpdate(prevProps, prevState) {}

  //follow user
  followUser = () => {
    let username = this.state.user.username;
    let { token } = this.context;

    fetch(Profiles_URL + '/' + username + '/follow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((user) => {
        this.setState((prevState) => {
          return { ...prevState, following: true };
        });
      });
  };

  unFollowUser = () => {
    let username = this.state.user.username;
    let { token } = this.context;

    fetch(Profiles_URL + '/' + username + '/follow', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((user) => {
        this.setState((prevState) => {
          return { ...prevState, following: false };
        });
      });
  };

  render() {
    return (
      <>
        {this.state.error ? (
          <section className='profile-error-sec container sec-padding'>
            <h2 className='sec-heading color-red'>{this.state.error}</h2>
          </section>
        ) : this.state.user ? (
          <>
            {' '}
            <section className='hero-sec '>
              <div className='profile-hero-div container'>
                <div className='flex center'>
                  <img
                    src={
                      this.state.user.image
                        ? this.state.user.image
                        : 'data:image/png;base64,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'
                    }
                    alt='profilePhoto'
                  />
                </div>

                <h4>{this.state.user.username}</h4>
                <div className='profile-hero flex jcfe'>
                  {this.state.itsMe ? (
                    <NavLink to='/settings' className='btn btn-pri'>
                      Edit Profile
                    </NavLink>
                  ) : this.state.following ? (
                    <button
                      className='btn btn-pri'
                      onClick={(event) => {
                        this.unFollowUser();
                      }}
                    >
                      Unfollow {this.state.user.username}
                    </button>
                  ) : (
                    <button
                      className='btn btn-pri'
                      onClick={(event) => {
                        this.followUser();
                      }}
                    >
                      Follow {this.state.user.username}
                    </button>
                  )}
                </div>
              </div>
            </section>
            <section className='profile-sec container sec-padding'>
              <div className='home-tags-div'>
                <ul className='flex '>
                  <li>
                    <a
                      className={
                        this.state.currentTag === 'my'
                          ? 'color-pri active'
                          : 'color-pri'
                      }
                      onClick={(event) => {
                        this.changeCurretTag('my');
                      }}
                      href='#'
                    >
                      My Blogs
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        this.state.currentTag === 'favorited'
                          ? 'color-pri active'
                          : 'color-pri'
                      }
                      onClick={(event) => {
                        this.changeCurretTag('favorited');
                      }}
                      href='#'
                    >
                      Favorited Blogs
                    </a>
                  </li>
                </ul>
                <hr />
              </div>
              <div className='home-articles-div'>
                {this.state.currentTag === 'my' ? (
                  this.state.user.articles ? (
                    this.state.user.articles.map((article, i) => {
                      return (
                        <HomeArticle article={article} key={article.title} />
                      );
                    })
                  ) : (
                    <div className='container '>
                      <h2 className='sec-heading'>No Blogs to display</h2>
                    </div>
                  )
                ) : !this.state.user.favoritedArticles ? (
                  <div className='container '>
                    <h2 className='sec-heading'>No Blogs to display</h2>
                  </div>
                ) : (
                  this.state.user.favoritedArticles.map((article, i) => {
                    return (
                      <HomeArticle article={article} key={article.title} />
                    );
                  })
                )}
              </div>
            </section>
          </>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

export default withRouter(Profile);

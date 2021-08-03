/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import HomeArticle from './homeMain/HomeArticle';

import Loader from '../../Loader';
import Tags from './homeMain/Tags';
import { Articles_URL, User_URL } from '../../../utils/constants';

class HomeMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: null,
      currentTag: 'global',
    };
  }

  componentDidMount() {
    fetch(Articles_URL)
      .then((res) => res.json())
      .then((articles) => {
        this.setState({ articles: articles.articles });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentTag !== this.state.currentTag) {
      if (this.state.currentTag === 'global') {
        fetch(Articles_URL)
          .then((res) => res.json())
          .then((articles) => {
            this.setState({ articles: articles.articles });
          });
      } else if (this.state.currentTag === 'personal') {
        fetch(User_URL + '/following/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: this.props.token,
          },
        })
          .then((res) => res.json())
          .then((articles) => {
            console.log('personal tag');
            this.setState({ articles: articles.articles });
          });
      } else {
        fetch(Articles_URL + `/tag/${this.state.currentTag}`)
          .then((res) => res.json())
          .then((articles) => {
            this.setState({ articles: articles.articles });
          });
      }
    }
  }

  //handleTagClick
  handleTagClick = (tag) => {
    this.setState({ currentTag: tag });
  };

  render() {
    return (
      <div className='container flex fw sec-padding'>
        <section className='home-sec flex-80'>
          <div className='home-tags-div'>
            <ul className='flex '>
              {this.state.currentTag === 'global' ? (
                <>
                  <li className='color-pri'>
                    <a
                      className='color-pri '
                      href='#'
                      onClick={(event) => this.handleTagClick('personal')}
                    >
                      Personal Feed
                    </a>
                  </li>
                  <li className='color-pri'>
                    <a className='color-pri active' href='#'>
                      Global Feed
                    </a>
                  </li>
                </>
              ) : this.state.currentTag === 'personal' ? (
                <>
                  <li className='color-pri'>
                    <a className='color-pri active ' href='#'>
                      Personal Feed
                    </a>
                  </li>
                  <li className='color-pri'>
                    <a
                      className='color-pri '
                      href='#'
                      onClick={(event) => this.handleTagClick('global')}
                    >
                      Global Feed
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className='color-pri'>
                    <a
                      className='color-pri '
                      href='#'
                      onClick={(event) => this.handleTagClick('personal')}
                    >
                      Personal Feed
                    </a>
                  </li>
                  <li className='color-pri'>
                    <a
                      className='color-pri'
                      href='#'
                      onClick={(event) => this.handleTagClick('global')}
                    >
                      Global Feed
                    </a>
                  </li>
                  <li className='color-pri'>
                    <a className='color-pri active' href='#'>
                      #{this.state.currentTag}
                    </a>
                  </li>
                </>
              )}
            </ul>
            <hr />
          </div>

          {this.state.articles ? (
            <div className='home-articles-div'>
              {this.state.articles.map((article, i) => {
                return (
                  <HomeArticle
                    article={article}
                    key={i}
                    loggedUser={this.props.loggedUser}
                    token={this.props.token}
                  />
                );
              })}
            </div>
          ) : (
            <Loader />
          )}
        </section>

        <Tags handleTagClick={this.handleTagClick} />
      </div>
    );
  }
}

export default HomeMain;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Tags_URL } from '../../../../utils/constants';
import Loader from '../../../Loader';

class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = { tags: null };
  }

  componentDidMount() {
    fetch(Tags_URL)
      .then((res) => res.json())
      .then((tags) => {
        this.setState({ tags: tags.tags });
      });
  }
  render() {
    return (
      <section className='tags-sec flex-20 mobilFlex-80 '>
        <div>
          <h2>Tags</h2>
          {this.state.tags ? (
            <ul className='flex fw'>
              {this.state.tags.map((tag, i) => {
                return (
                  <li key={i}>
                    <a
                      href='#'
                      // className='btn btn-sec'
                      className='button-tag'
                      onClick={(event) => {
                        this.props.handleTagClick(tag);
                      }}
                    >
                      #{tag}
                    </a>
                  </li>
                );
              })}
            </ul>
          ) : (
            <Loader />
          )}
        </div>
      </section>
    );
  }
}

export default Tags;

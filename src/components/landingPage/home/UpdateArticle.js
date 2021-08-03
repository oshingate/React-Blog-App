import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import Loader from '../../Loader';
import { Articles_URL } from '../../../utils/constants';

class updateArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null,
    };
  }

  componentDidMount() {
    let slug = this.props.match.params.slug;
    console.log(slug);
    fetch(Articles_URL + slug, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.props.token,
      },
    })
      .then((res) => res.json())
      .then((article) => {
        this.setState({ article: article.article });
      });
  }

  updateArticle = (event) => {
    event.preventDefault();
    let slug = this.props.match.params.slug;
    let data = {
      title: event.target.title.value,
      description: event.target.description.value,
      body: event.target.body.value,
    };

    if (data.title || data.body) {
      fetch(Articles_URL + slug, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.props.token,
        },

        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((createdPost) => {
          this.props.history.push('/');
        });
    }
  };

  handleChange = (event, field) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        article: {
          ...prevState.article,
          [field]: event.target.value,
        },
      };
    });
  };

  render() {
    return (
      <>
        {this.state.article ? (
          <section className='NewArticle-sec'>
            <h2 className='sec-heading'>Update Article</h2>

            <form
              onSubmit={(event) => {
                this.updateArticle(event);
              }}
            >
              <fieldset>
                <label htmlFor='title'></label>
                <input
                  type='text'
                  name='title'
                  id='articleTitle'
                  placeholder='Article Title'
                  value={this.state.article.title}
                  onChange={(event) => {
                    this.handleChange(event, 'title');
                  }}
                />
                <span></span>
              </fieldset>
              <fieldset>
                <label htmlFor='description'></label>
                <input
                  type='text'
                  name='description'
                  id='articledescription'
                  placeholder='Enter Description'
                  value={this.state.article.description}
                  onChange={(event) => {
                    this.handleChange(event, 'description');
                  }}
                />
                <span></span>
              </fieldset>
              <fieldset>
                <label htmlFor='body'></label>
                <textarea
                  name='body'
                  id='articleBody'
                  cols='30'
                  rows='10'
                  placeholder='Article Body'
                  value={this.state.article.body}
                  onChange={(event) => {
                    this.handleChange(event, 'body');
                  }}
                ></textarea>
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

export default withRouter(updateArticle);

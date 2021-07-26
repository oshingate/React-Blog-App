import React, { Component } from 'react';
import _ from 'lodash';

class NewArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  createNewArticle = (event) => {
    event.preventDefault();
    let data = {
      title: event.target.title.value,
      description: event.target.description.value,
      body: event.target.body.value,
      tags: _.uniq(
        event.target.tags.value.split(',').map((tag) => {
          return tag.trim();
        })
      ),
    };

    if (data.title || data.body) {
      fetch('http://localhost:4000/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.props.token,
        },

        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((createdPost) => {
          console.log(createdPost);
        });
    }
  };

  render() {
    return (
      <section className='NewArticle-sec'>
        <h2 className='sec-heading'>New Article</h2>

        <form
          onSubmit={(event) => {
            this.createNewArticle(event);
          }}
        >
          <fieldset>
            <label htmlFor='title'></label>
            <input
              type='text'
              name='title'
              id='articleTitle'
              placeholder='Article Title'
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
            ></textarea>
            <span></span>
          </fieldset>
          <fieldset>
            <label htmlFor=''></label>
            <input
              type='text'
              name='tags'
              id='articleTags'
              placeholder='Enter Tags seprated by comma ( , )'
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
    );
  }
}

export default NewArticle;

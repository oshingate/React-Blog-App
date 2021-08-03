import React, { Component } from 'react';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className='flex center height-100'>
        <div className='donut'></div>
      </section>
    );
  }
}

export default Loader;

import React, { Component } from 'react';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='bouncing-loader'>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default Loader;

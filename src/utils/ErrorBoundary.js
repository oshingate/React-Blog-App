import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      info: null,
    };
  }

  componentDidCatch(error, info) {
    console.dir(error);
    this.setState({ hasError: true, error, info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className='hero-sec'>
          <h3 className='sec-heading text-center'>
            OOPS !!!!!! {this.state.error.message}
          </h3>
        </section>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;

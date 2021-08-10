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
    this.setState({ hasError: true, error, info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <section>
          <h2 className='sec-heading text-center'>
            OOPS !!!!!! {this.state.error}
          </h2>
          <p>{this.state.info}</p>
        </section>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;

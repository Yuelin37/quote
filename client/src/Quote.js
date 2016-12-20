import React, { Component, PropTypes } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

class Quote extends Component {
  componentDidMount() {
    // this.props.fetchQuote();
  }
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>{this.props.quoteAuthor}</h1>
          <h2>{this.props.quoteText}</h2>
          <p><Button bsStyle="primary" bsSize="large" onClick={this.props.fetchQuote}>Next Quote</Button></p>
        </Jumbotron>
      </div>
    );
  }
}

Quote.propTypes = {
  quoteText: PropTypes.string.isRequired,
  quoteAuthor: PropTypes.string.isRequired,
  fetchQuote: PropTypes.func.isRequired,
};

export default Quote;

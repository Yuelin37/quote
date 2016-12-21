import React, { Component, PropTypes } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

class Quote extends Component {
  componentDidMount() {
    // this.props.fetchQuote();
  }
  refreshQuote = () => {
    this.props.refreshQuote(this.props.id);
  };
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>{this.props.quoteAuthor}</h1>
          <h2>{this.props.quoteText}</h2>
          <p><Button bsStyle="primary" bsSize="large" onClick={this.refreshQuote}>Next Quote</Button></p>
        </Jumbotron>
      </div>
    );
  }
}

Quote.propTypes = {
  id: PropTypes.number.isRequired,
  quoteText: PropTypes.string.isRequired,
  quoteAuthor: PropTypes.string.isRequired,
  refreshQuote: PropTypes.func.isRequired,
};

export default Quote;

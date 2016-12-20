import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Quote from './Quote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteText: '...',
      quoteAuthor: '...',
    };
  }
  // componentDidMount() {
  componentWillMount() {
    this.fetchQuote();
    // console.log(this.state);
  }
  fetchQuote = ()=>{
    axios.get('api/randomquote')
    .then(quote=>{
      this.setState({
        quoteText: quote.data.quoteText,
        quoteAuthor: quote.data.quoteAuthor
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="App">
        {/* A JSX comment
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        */}
        <Quote quoteText={this.state.quoteText} quoteAuthor={this.state.quoteAuthor}
          fetchQuote={this.fetchQuote} />
      </div>
    );
  }
}

export default App;

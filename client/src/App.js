
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Quote from './Quote';
import { Button } from 'react-bootstrap';

class App extends Component {
  componentWillMount() {
    this.state = {
      quotes: []
    };
  }
  nextId() {
    this.uniqueId = this.uniqueId || 0;
    return this.uniqueId++;
  }
  add(text) {
    var newId = this.nextId();
    var quotes = [
      ...this.state.quotes,
      {
        id: newId,
        quoteText: text,
        quoteAuthor: 'new author...',
        refreshQuote: this.refreshQuote
      }
    ];
    this.setState({quotes});
    this.refreshQuote(newId);
  }
  refreshQuote = (id) => {
    this.fetchQuote(id);
  };
  fetchQuote = (id) => {
    axios.get('api/randomquote')
    .then(quote=>{
      if (typeof quote.data.quoteText === 'undefined'){
        this.fetchQuote(id);
      }else {
        var quotes = [...this.state.quotes];
        quotes[id].quoteText = quote.data.quoteText;
        quotes[id].quoteAuthor = quote.data.quoteAuthor;
        this.setState({quotes});
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  eachQuote(quote) {
    return (<Quote key={quote.id}
                    id={quote.id}
                    quoteText={quote.quoteText}
                    quoteAuthor={quote.quoteAuthor}
                    refreshQuote={quote.refreshQuote}
                    >
              </Quote>);
  }


  render() {
    return (
      <div className="App">
        {this.state.quotes.map(this.eachQuote)}

        <Button bsStyle="primary" bsSize="large" onClick={()=>this.add('new quote')}>Add</Button>
      </div>
    );
  }
}

export default App;

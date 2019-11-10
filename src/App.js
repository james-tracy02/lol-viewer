import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={FeaturedSpectate} />
      </Router>
    );
  }
}

export default App;
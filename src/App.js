import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FeaturedSpectate from "./containers/FeaturedSpectate";
import SummonerLookup from "./containers/SummonerLookup";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path="/" component={SummonerLookup} />
        <Route path="/spectate" component={FeaturedSpectate} />
        <Footer />
      </Router>
    );
  }
}

export default App;

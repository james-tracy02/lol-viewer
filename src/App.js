import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FeaturedSpectate from "./containers/FeaturedSpectate";
import SummonerLookup from "./containers/SummonerLookup";
import SummonerProfile from "./containers/SummonerProfile";
import ChampionRotations from "./containers/ChampionRotations";
import MatchSummary from "./containers/MatchSummary";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path="/" component={SummonerLookup} />
        <Route path="/spectate" component={FeaturedSpectate} />
        <Route path="/summoners/:name" component={SummonerProfile} />
        <Route path="/champions" component={ChampionRotations} />
        <Route path="/matches/:id" component={MatchSummary} />
        <Footer />
      </Router>
    );
  }
}

export default App;

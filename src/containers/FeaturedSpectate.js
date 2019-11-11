import React, { Component } from 'react';
import LiveMatch from '../components/LiveMatch';
import { riotService } from '../service/RiotService';

export default class FeaturedSpectate extends React.Component {
  constructor() {
    super();

    this.state = {
      matches: [],
    };
  }

  componentDidMount() {
    this.fetchMatches()
    .then((matches) => this.setState({ matches: matches }));
  }

  fetchMatches() {
    return riotService.getFeaturedSpectate();
  }

  render() {
    return (
      <div className="spectate">
        <div className="container px-5 py-3">
        <h2>Featured Spectate</h2>
        <hr />
          {this.state.matches.map((match) => {
            return <LiveMatch match={match} />;
          })}
        </div>
      </div>
    )
  }
}

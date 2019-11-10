import React, { Component } from 'react';
import Match from '../components/Match';
import mockMatches from '../mock/matches.json';

export default class FeaturedSpectate extends React.Component {
  constructor() {
    super();

    this.state = {
      matches: [],
    };
  }

  componentDidMount() {
    this.fetchMatches()
    .then((matches) => this.setState({matches: matches}));
  }

  fetchMatches() {
    return new Promise(function(resolve, reject) {
      resolve(mockMatches.gameList)
    });
  }

  render() {
    return (
      <div className="spectate">
        <div className="container px-5 py-1">
          {this.state.matches.map((match) => {
            return <Match match={match} />;
          })}
        </div>
      </div>
    )
  }
}

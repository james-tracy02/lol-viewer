import React, { Component } from 'react';
import SummonerInfo from '../components/SummonerInfo';
import { riotService } from '../service/RiotService';

export default class SummonerProfile extends React.Component {
  constructor() {
    super();

    this.state = {
      summoner: null,
    }
  }

  componentDidMount() {
    this.fetchSummoner(this.props.match.params.name);
  }

  fetchSummoner(name) {
    return riotService.getSummonerByName(name)
    .then((summoner) => this.setState({ summoner: summoner }));
  }

  render() {
    if(this.state.summoner) {
      return <SummonerInfo summoner={this.state.summoner} />
    } else {
      return <div>Fetching Summoner Profile...</div>
    }
  }
}

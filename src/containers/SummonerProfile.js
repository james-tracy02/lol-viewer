import React, { Component } from 'react';
import SummonerInfo from '../components/SummonerInfo';
import FeedbackMessage from '../components/FeedbackMessage';
import { riotService } from '../service/RiotService';

export default class SummonerProfile extends React.Component {
  constructor() {
    super();

    this.state = {
      summoner: null,
      statusCode: null,
    }
  }

  componentDidMount() {
    this.fetchSummoner(this.props.match.params.name);
  }

  fetchSummoner(name) {
    return riotService.getSummonerByName(name)
    .then((res) => {
      this.setState({
        summoner: JSON.parse(res.body),
        statusCode: res.statusCode,
      });
    });
  }

  render() {
    if(!this.state.summoner) {
      return <FeedbackMessage msg="Fetching summoner profile..." />;
    } else if (this.state.statusCode !== 200) {
      return <FeedbackMessage msg={this.state.summoner.status.message} />;
    } else {
      return <SummonerInfo summoner={this.state.summoner} />
    }
  }
}

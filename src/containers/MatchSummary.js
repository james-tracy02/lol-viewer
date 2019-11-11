import React, { Component } from 'react';
import MatchDetails from '../components/MatchDetails';
import FeedbackMessage from '../components/FeedbackMessage';
import { riotService } from '../service/RiotService';

export default class MatchSummary extends React.Component {
  constructor() {
    super();

    this.state = {
      match: null,
      statusCode: null,
    }
  }

  componentDidMount() {
    this.fetchMatch(this.props.match.params.id);
  }

  fetchMatch(id) {
    return riotService.getMatchById(id)
    .then((res) => {
      this.setState({
        match: JSON.parse(res.body),
        statusCode: res.statusCode,
      });
    });
  }

  render() {
    if(this.state.match) {
      return <MatchDetails match={this.state.match} />
    } else {
      return <FeedbackMessage msg="Fetching match data..." />
    }
  }
}

import React, { Component } from 'react';
import MatchRef from '../components/MatchRef';
import { riotService } from '../service/RiotService';

export default class MatchHistory extends React.Component {
  constructor() {
    super();

    this.state = {
      res: null,
      matches: [],
      statusCode: null,
    };
  }

  componentDidMount() {
    this.fetchMatches();
  }

  fetchMatches() {
    riotService.getMatchesBySummonerId(this.props.summonerId)
    .then((res) => {
      this.setState({
        res: JSON.parse(res.body),
        matches: JSON.parse(res.body).matches,
        statusCode: res.statusCode,
      })
    });
  }

  fetchByQueue(e) {
    if(e.target.value === "0") {
      this.fetchMatches();
    } else {
      riotService.getMatchesBySummonerId(this.props.summonerId, e.target.value)
      .then((res) => {
        this.setState({
          res: JSON.parse(res.body),
          matches: JSON.parse(res.body).matches,
          statusCode: res.statusCode,
        })
      });
    }
  }

  render() {
    return (
      <div className="match-history">
        <div className="filters">
          <span className="mr-2">
            Queue Type:
          </span>
          <select name="queue" onChange={(e) => this.fetchByQueue(e)}>
            <option value="0">All Queues</option>
            <option value="400">Draft Pick</option>
            <option value="420">Ranked Solo</option>
            <option value="430">Blind Pick</option>
            <option value="440">Ranked Flex</option>
            <option value="450">ARAM</option>
            <option value="900">URF</option>
          </select>
        </div>
        {this.state.matches.map((match) => {
          return <MatchRef match={match} />
        })}
      </div>
    )
  }
}

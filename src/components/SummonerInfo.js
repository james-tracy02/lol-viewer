import React, { Component } from 'react';
import MatchHistory from '../containers/MatchHistory';
import {dataDragonService} from '../service/DataDragonService';

export default class SummonerInfo extends React.Component {
  render() {
    return(
      <div className="summoner-info p-3">
        <div className="container">
          <div className="bg-white border-bottom p-2">
            <img src={dataDragonService.getProfileIconSrc(this.props.summoner.profileIconId)} width="120" height="120" />
            <div className="px-2 d-inline-block align-bottom">
              <h3 className="font-weight-bold">{this.props.summoner.name}</h3> <h5 className="text-muted font-italic">lvl {this.props.summoner.summonerLevel}</h5>
            </div>
          </div>
          <div className="match-history bg-white border-bottom p-2">
            <h3>Match History</h3>
            <hr />
            <MatchHistory summonerId={this.props.summoner.accountId}/>
          </div>
        </div>
      </div>
    )
  }
}

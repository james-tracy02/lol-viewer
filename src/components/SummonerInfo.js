import React, { Component } from 'react';

const ddragon = 'http://ddragon.leagueoflegends.com/cdn/9.22.1';

export default class SummonerInfo extends React.Component {
  render() {
    return(
      <div className="summoner-info p-3">
        <div className="bg-white border-bottom container p-2">
          <img src={`${ddragon}/img/profileicon/${this.props.summoner.profileIconId}.png`} width="200" height="200" />
          <div className="px-2 d-inline-block align-bottom">
            <h2 className="font-weight-bold">{this.props.summoner.name}</h2> <h5 className="text-muted font-italic">lvl {this.props.summoner.summonerLevel}</h5>
          </div>
        </div>
      </div>
    )
  }
}

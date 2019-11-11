import React, { Component } from 'react';
import {dataDragonService} from '../service/DataDragonService';

export default class PlayerInfo extends React.Component {
  parity() {
    if(this.props.num % 2 == 1) {
      return " jbg-light";
    } else {
      return " jbg-gray";
    }
  }
  render() {
    return (
      <div className={"player-info text-dark px-3 py-1" + this.parity()}>
        <div className="champion-portrait d-inline-block mr-1">
          <img src={dataDragonService.getChampionIcon(this.props.player.championId)} width="20" height="20" />
        </div>
        <span>{this.props.player.summonerName}</span>
      </div>
    )
  }
}

import React, { Component } from 'react';
import PlayerInfo from '../components/PlayerInfo';
import PlayerTable from '../components/PlayerTable';
import {dataDragonService} from '../service/DataDragonService';

export default class SummonerInfo extends React.Component {

  formatTime(time) {
    if(time < 0) {
      return "Game not started";
    }
    const seconds = Math.floor(time/1000);
    let res = "";
    res = res + Math.floor(seconds/60) + ":";
    if(seconds%60 < 10) {
      res = res + "0";
    }
    res = res + (seconds%60);
    return res;
  }

  getVictor() {
    const match = this.props.match;
    let res = "Blue";
    match.teams.forEach((team) => {
      if(team.teamId === 100) {
        if(team.win === "Fail") {
          res = "Red"
        }
      }
    });
    return res;
  }

  getColor(victor) {
    if(victor === "Red") {
      return "jbg-red";
    } else {
      return "jbg-blue";
    }
  }

  render() {
    const queueInfo = dataDragonService.queueInfo(this.props.match.queueId);
    const victor = this.getVictor();
    const color = this.getColor(victor);
    const redTeam = [];
    const blueTeam = [];
    this.props.match.participants.forEach((participant) => {
      if(participant.teamId === 100) {
        blueTeam.push(participant);
      } else {
        redTeam.push(participant);
      }
    });

    return(
      <div className="match-summary container my-3">
        <div className="bg-white p-2">
          <h3>{queueInfo.mode}</h3>
          <h5 className="text-muted font-italic">{queueInfo.map}</h5>
          {this.formatTime(this.props.match.gameDuration*1000)}
        </div>
        <div className="jbg-blue p-2 font-weight-bold text-white">
          Blue Team {victor === "Blue" ? "(Winner)" : ""}
        </div>
        <PlayerTable players={blueTeam}/>
        <div className="jbg-red p-2 font-weight-bold text-white">
          Red Team {victor === "Red" ? "(Winner)" : ""}
        </div>
        <PlayerTable players={redTeam}/>
      </div>
    )
  }
}

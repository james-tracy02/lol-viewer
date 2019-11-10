import React, { Component } from 'react';
import Clock from './Clock';
import PlayerInfo from './PlayerInfo';

export default class Match extends React.Component {

  queueInfo(qid) {
    switch (qid) {
      case 400:
        return { mode: "Draft Pick", map: "Summoner's Rift" };
      case 420:
        return { mode: "Ranked Solo", map: "Summoner's Rift" };
      case 430:
        return { mode: "Blind Pick", map: "Summoner's Rift" };
      case 440:
        return { mode: "Ranked Flex", map: "Summoner's Rift" };
      case 450:
        return { mode: "ARAM", map: "Howling Abyss" };
      default:
        return { mode: "Unknown", map: "Unknown"};
    }
  }

  colorFromMap(map) {
    if(map === "Summoner's Rift") {
      return "jbg-red";
    } else {
      return "jbg-blue";
    }
  }

  render() {
    const queueInfo = this.queueInfo(this.props.match.gameQueueConfigId);
    const time = Date.now() - this.props.match.gameStartTime;
    return (
      <div className="match">
        <div className={"mx-3 my-3 p-3 text-white " + this.colorFromMap(queueInfo.map)}>
          <span className="match-header font-weight-bold">{queueInfo.mode}</span> | <small>{queueInfo.map}</small> | <small><Clock time={time} /></small>
          <div className="row">
            <div className="col">
              <div className="jbg-light text-dark p-2 font-weight-bold border-bottom">Blue Team:</div>
                {this.props.match.participants.map((player) => {
                  if(player.teamId == 100) {
                    return <PlayerInfo player={player} />
                  }
                })}
            </div>
            <div className="col">
              <div className="jbg-light text-dark p-2 font-weight-bold border-bottom border-top">Red Team:</div>
                {this.props.match.participants.map((player) => {
                  if(player.teamId == 200) {
                    return <PlayerInfo player={player} />
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react';
import Clock from './Clock';
import PlayerInfo from './PlayerInfo';
import {dataDragonService} from '../service/DataDragonService';

export default class LiveMatch extends React.Component {

  colorFromMap(map) {
    return "jbg-blue";
  }

  render() {
    let num = 1;
    const queueInfo = dataDragonService.queueInfo(this.props.match.gameQueueConfigId);
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
                    num++;
                    return <PlayerInfo player={player} num={num} />
                  }
                })}
            </div>
            <div className="col">
              <div className="jbg-light text-dark p-2 font-weight-bold border-bottom border-top">Red Team:</div>
                {this.props.match.participants.map((player) => {
                  if(player.teamId == 200) {
                    num++;
                    return <PlayerInfo player={player} num={num-1} />
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

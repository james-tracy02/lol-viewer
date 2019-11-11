import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {dataDragonService} from '../service/DataDragonService';

export default class MatchRef extends React.Component {
  render() {
    const queueInfo = dataDragonService.queueInfo(this.props.match.queue);
    return (
      <div className="match-ref container">
        <div className="bg-white border-bottom p-2">
          <img src={dataDragonService.getChampionIcon(this.props.match.champion)} width="60" height="60" />
          <div className="px-2 d-inline-block">
            {queueInfo.mode} <small className="font-italic text-muted">{queueInfo.map}</small>
            <div className="px-2 ml-2 d-inline-block">
              {new Date(this.props.match.timestamp).toString().substring(0, 15)}
            </div>
          </div>
          <div className="details-btn float-right">
            <Link className="btn btn-dark" to={`/matches/${this.props.match.gameId}`}>Details</Link>
          </div>
        </div>
      </div>
    )
  }
}

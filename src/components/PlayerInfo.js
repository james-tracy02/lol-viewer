import React, { Component } from 'react';

export default class PlayerInfo extends React.Component {
  render() {
    return (
      <div className="player-info jbg-light text-dark px-3 py-1">
        {this.props.player.summonerName}
      </div>
    )
  }
}

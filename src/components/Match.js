import React, { Component } from 'react';

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

  render() {
    const queueInfo = this.queueInfo(this.props.match.gameQueueConfigId);

    return (
      <div className="match">
        <div className="mx-3 my-1 p-3 bg-primary text-white">
          {queueInfo.mode} | <small>{queueInfo.map}</small>
        </div>
      </div>
    )
  }
}

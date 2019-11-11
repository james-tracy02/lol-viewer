import React, { Component } from 'react';
import SummonerInfo from '../components/SummonerInfo';
import Champion from '../components/Champion';
import { riotService } from '../service/RiotService';

export default class ChampionRotations extends React.Component {
  constructor() {
    super();

    this.state = {
      championIds: [],
      newPlayerChampionIds: [],
      lvl: 0,
    }
  }

  componentDidMount() {
    this.fetchChampionRotation(this.props.match.params.name);
  }

  fetchChampionRotation() {
    return riotService.getChampionRotations()
    .then((championRotations) => {
      this.setState({ championIds: championRotations.freeChampionIds,
                      newPlayerChampionIds: championRotations.freeChampionIdsForNewPlayers,
                      lvl: championRotations.maxNewPlayerLevel,
                    });
    });
  }

  render() {
    return (
      <div className="championRotations container">
        <div className="championRotation pt-3">
          <h2>Free Champion Rotation</h2>
          <hr />
          <div className="row">
          {this.state.championIds.map((championId) => {
            return <Champion championId={championId} />
          })}
          </div>
        </div>
        <div className="championRotationNewPlayers">
          <h2>Free Champion Rotation (under lvl {this.state.lvl})</h2>
          <hr />
          <div className="row">
          {this.state.newPlayerChampionIds.map((championId) => {
            return <Champion championId={championId}/>
          })}
          </div>
        </div>
      </div>
    )
  }
}

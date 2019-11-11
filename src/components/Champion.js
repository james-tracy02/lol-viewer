import React, { Component } from 'react';
import { dataDragonService } from '../service/DataDragonService';

export default class Champion extends React.Component {
  constructor() {
    super();

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    this.fetchChampionData()
    .then((data) => this.setState({ data: data }));
  }

  fetchChampionData() {
    return dataDragonService.getChampionData(this.props.championId);
  }

  difficulty(diff) {
    switch (diff) {
      case 1:
        return "Simple";
      case 2:
        return "Intermediate";
      case 3:
        return "Advanced";
    }
  }

  render() {
    if(this.state.data) {
      console.log(this.state.data);
      return(
        <div className="champion m-3 col-5">
          <div className="champion-header bg-white p-2 border-bottom">
            <img src={dataDragonService.getChampionIcon(this.props.championId)} width="70" height="70" />
            <div className="d-inline-block align-bottom ml-2">
            <h4>{this.state.data.name}</h4>
            <h6 className="text-muted font-italic">{this.state.data.title}</h6>
            </div>
          </div>
          <div className="champion-body bg-white py-2 px-4">
            <div className="font-weight-bold champion-info">
              Role: {this.state.data.roles.join(' / ')}
              <br />
              Difficulty: {this.difficulty(this.state.data.tacticalInfo.difficulty)}
            </div>
          </div>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

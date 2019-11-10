import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

export default class SummonerLookup extends React.Component {
  constructor() {
    super();

    this.state = {
      summonerName: "",
      search: false,
    };
  }

  handleInput(event) {
    this.setState({summonerName: event.target.value});
  }

  handleKey(event) {
    if(event.keyCode === 13) {
      this.setState({search: true});
    }
  }

  render() {
    if(this.state.search) {
      return <Redirect push to={`/summoners/${this.state.summonerName}`} />;

    }
    return (
      <div className="summoner-lookup bg-dark text-light">
        <div className="container px-5 py-1">
          <h1>LOL Viewer</h1>
          <h4>Search a summoner name to view their profile:</h4>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Summoner Name</span>
            </div>
            <input type="text"
                   className="form-control"
                   value={this.state.summonerName}
                   onChange={(e) => this.handleInput(e)}
                   onKeyDown={(e) => this.handleKey(e)}
                   placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
           <Link className="btn btn-light ml-2" to={`/summoners/${this.state.summonerName}`}>Search</Link>
          </div>
        </div>
      </div>
    )
  }
}

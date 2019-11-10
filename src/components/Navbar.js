import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar navbar-dark bg-dark navbar-expand-sm">
        <div className="container">
          <a className="navbar-brand" href="">LOL Viewer</a>
          <div className="navbar-nav mr-auto">
            <NavLink className="nav-item nav-link" activeClassName="active" exact={true} to="/">Home</NavLink>
            <NavLink className="nav-item nav-link" activeClassName="active" to="/champions">Champions</NavLink>
            <NavLink className="nav-item nav-link" activeClassName="active" to="/spectate">Spectate</NavLink>
            <NavLink className="nav-item nav-link" activeClassName="active" to="/leaderboards">Leaderboards</NavLink>
          </div>
        </div>
      </div>
    )
  }
}

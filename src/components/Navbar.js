import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar navbar-dark bg-dark navbar-expand-sm">
        <div className="container">
          <NavLink className="navbar-brand" to="/">LOL Viewer</NavLink>
          <div className="navbar-nav mr-auto">
            <NavLink className="nav-item nav-link" activeClassName="active" exact={true} to="/">Home</NavLink>
          </div>
        </div>
      </div>
    )
  }
}

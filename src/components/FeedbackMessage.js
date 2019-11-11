import React, { Component } from 'react';

export default class FeedbackMessage extends React.Component {
  render() {
    return(
      <div className="feedback-message container p-3">
        <h3>{this.props.msg}</h3>
      </div>
    )
  }
}

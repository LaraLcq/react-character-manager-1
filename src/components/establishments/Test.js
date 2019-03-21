import React, { Component } from 'react'

export default class Test extends Component {
  render() {
    return (
      <h1>
        {this.props.match.params.user} ne sait pas coder
      </h1>
    )
  }
}

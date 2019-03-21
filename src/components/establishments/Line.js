import React, { Component } from 'react'
import { BrowserRouter as HashRouter, Link } from "react-router-dom";

export default class Line extends Component {
  render() {
    return (
      <HashRouter>
        <li>
          <Link to={{ pathname: this.props.link}}>
            {this.props.param}
          </Link>
        </li>
        
      </HashRouter>
    )
  }
}

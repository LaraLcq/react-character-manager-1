import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,} from 'reactstrap'
import {Link} from 'react-router-dom'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar color="light" sticky="top" light expand="md">

            <Link className="navbar-brand" to="/">Scratch</Link>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/test">
                  Test
                </Link>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}


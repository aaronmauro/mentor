//a React component is just some JS that returns some JSX
import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import logo from '../logo.svg';

const menu = (props) => {
    return (
      <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">
          <img
            alt="Mentor Logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            />
        </Navbar.Brand>
        <Navbar.Brand href="#home">{props.children}</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
      </Navbar>
    )
};

export default menu;
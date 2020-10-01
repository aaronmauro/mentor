import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';
import logo from '../logo.svg';

const jumbotron = (props) => {
    return (
        <Jumbotron fluid className="Jumbotron">
            <Container>
            <img
            alt="Mentor Logo"
            src={logo}
            width="80em"
            height="80em"
            className="d-inline-block float-left"></img>
                <h1>{props.heading_one} {props.user}</h1>
                <p>
                {props.lead}
                </p>
            </Container>
        </Jumbotron>
    )
};
export default jumbotron;
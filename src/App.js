import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CardGroup,Button,Modal,InputGroup,FormControl} from 'react-bootstrap';
import Menu from './Menu/Menu';
import Card from './Card/Card'
import Jumbotron from './Jumbotron/Jumbotron';
import './App.css';

class App extends Component {
  state={
      show:false,
      fullName: null
  }

switchStateHandler = () =>{
  //console.log("Was clicked");
  this.setState({show:!this.state.show})
  
}

handleSubmit = (event) => {
  event.preventDefault()
}

handleInputChange = (event) =>{
  event.preventDefault()
  this.setState({fullName: event.target.value})
}

  render() {
    
    return (
      <div className="App">
        
        <Menu>Mentor</Menu>
        
        <Jumbotron 
        heading_one="Welcome to Mentor"
        lead="We connect talented students to professional mentors working in exciting companies."
        user={this.state.fullName}/>
        
        <CardGroup className="CardGroup">
          <Card 
          title="I need a Mentor" 
          text="I am a student, and I want to build experience with great people."
          ><Button onClick={this.switchStateHandler} variant="info" >Let's Go!</Button></Card>
          
          <Card 
          title="I am a Mentor" 
          text="I run an exciting organization, and I love onboarding new talent."
          ><Button onClick={this.switchStateHandler} variant="outline-info" >Let's Start!</Button></Card>
        </CardGroup>

        <Modal show={this.state.show}>
          <Modal.Header>What is your name?</Modal.Header>
            <Modal.Body>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Your Name" name="fullName" onChange={this.handleInputChange}></input>
              <br/>
              <br/>
              <Button>Submit</Button>
            </form>
            <br/>
            <p>Welcome to Mentor {this.state.fullName}!</p>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.switchStateHandler}>Close</Button>
            </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;

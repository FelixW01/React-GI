import { Component } from 'react';
import './App.css'

// App class, render method with a hard coded div  *
// Make div dynamic by using this.state 
// Take in props from parent component
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        person: {
          name: props.name,
          phone: props.phone,
          dob: props.dob,
          email: props.email
        }
      };
    }
      render() {
        return (
        <div>
          <h1>Name: {this.state.person.name}</h1>
          <p>Phone: {this.state.person.phone}</p>
          <p>Date of Birth: {this.state.person.dob}</p>
          <p>Email: {this.state.person.email}</p>
        </div>
      )
    }
  }
  
export default App;
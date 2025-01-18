import { Component } from 'react';
import './App.css'

// App class, render method with a hard coded div  *
// Make div dynamic by using this.state 
// Take in props from parent component
// Turn this.state.person to an array of people
// Map thru array of people to render basicInfo for individual person
// BasicInfo class component that takes in info from App and renders it dynamically
class BasicInfo extends Component {
    render() {
      const { name, phone, dob, email } = this.props.person;
      return (
        <div>
           <h2>{name}</h2>
           <p>Phone: {phone}</p>
           <p>Date of Birth: {dob}</p>
           <p>Email: {email}</p>
        </div>
      );
    }
  };
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        people: [
          {
          name: 'Felix Willem',
          phone: '(212) 123-4567',
          dob: 'Feb 2, 2000',
          email: 'felix@yahoo.com'
        },
        {
          name: 'Kobe Bryant',
          phone: '(212) 123-4527',
          dob: 'Feb 2, 2000',
          email: 'ron@yahoo.com'
        },
        {
          name: 'Lionel Messi',
          phone: '(212) 123-4577',
          dob: 'Feb 2, 2000',
          email: 'mes@yahoo.com'
        },
        {
          name: 'Bob the Coder',
          phone: '(212) 123-3567',
          dob: 'Feb 2, 2000',
          email: 'bob@yahoo.com'
        },
      ]
      };
    }
      render() {
        return (
        <div className='div-container'>
        <h1>Contact</h1>
        <div className='hero-div'>
        {this.state.people.map((person, index) => {
            return (
              <div key={index} className='card'>
              <BasicInfo person={person} />
              </div>
              )
        })}
        </div>
        </div>
      )
    }
  }

 
export default App;
      
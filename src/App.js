import React from 'react';
import Person from './Person.js'
import './App.css';
import ImgOne from './img/pop1.jpg'
import ImgTwo from './img/pop2.jpg'
import ImgThree from './img/pop3.jpg'
import ImgFour from './img/pop4.jpg'

class App extends React.Component {
  state = {
    persons: [
      { name: "Scarlett", age: 34, hobbies: ["Cooking", "Gym"] },
      { name: "Jim", age: 55, hobbies: ["Cars", "Sport"] },
      { name: "Nelly", age: 40, hobbies: ["Art", "Reading"] },
      { name: "Madonna", age: 61, hobbies: ["Music", "Dance"] }
    ]
  }
  render() {
    return (
      <div className="carddisplay">
        <Person img={ImgOne} name={this.state.persons[0].name} age={this.state.persons[0].age} hobbies={this.state.persons[0].hobbies} />

        <Person img={ImgTwo} name={this.state.persons[1].name} age={this.state.persons[1].age} hobbies={this.state.persons[1].hobbies} />

        <Person img={ImgThree} name={this.state.persons[2].name} age={this.state.persons[2].age} hobbies={this.state.persons[2].hobbies} />
        
        <Person img={ImgFour} name={this.state.persons[3].name} age={this.state.persons[3].age} hobbies={this.state.persons[3].hobbies} />
      </div>
    );
  }
}


export default App;

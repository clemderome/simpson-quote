import React from 'react';
import axios from 'axios'
import SimpsonQuote from './components/SimpsonQuote'
import './App.css';

const simpson = {
  quote:"Facts are meaningless. You could use facts to prove anything that's even remotely true.",
  character:"Homer Simpson",
  image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  characterDirection:"Right" 
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: simpson
    }
    this.getQuote = this.getQuote.bind(this)
  }
  getQuote(){
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes/')
    .then(response => response.data)
    .then(data => {
      this.setState({character: data[0]})
    }
    )
  }
    render(){
    return (
      <div className="App">
        <SimpsonQuote character={this.state.character}/>
        <button type="button" onClick={this.getQuote}>Another one !</button>
      </div>
    );
  }
}

export default App;

import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import Header from './components/Header/Header'
import './App.css';

class App extends Component {
  state = {
    score: 0
  }

  render() {
    return (
      <Fragment>
        <Header scoreValue={this.state.score}/>
      </Fragment>
    );
  } 
}

export default App;

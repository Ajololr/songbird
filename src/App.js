import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import QuestionBlock from './components/QuestionBlock/QuestionBlock';

class App extends Component {
  state = {
    score: 0
  }

  render() {
    return (
      <Fragment>
        <Header scoreValue={this.state.score}/>
        <QuestionBlock />
      </Fragment>
    );
  } 
}

export default App;

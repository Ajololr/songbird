import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import QuestionBlock from './components/QuestionBlock/QuestionBlock';
import AnswerList from './components/AnswerList/AnswerList';
import DescriptionBlock  from './components/DescriptionBlock/DescriptionBlock'

class App extends Component {
  state = {
    score: 0
  }

  render() {
    return (
      <Fragment>
        <Header scoreValue={this.state.score}/>
        <QuestionBlock />
        <AnswerList />
        <DescriptionBlock birdElement={{name: 'Rerirf', latinName: 'asd', description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}}/>
        {/* <NextLevelButton /> */}
      </Fragment>
    );
  } 
}

export default App;

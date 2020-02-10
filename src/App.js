import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import QuestionBlock from './components/QuestionBlock/QuestionBlock';
import AnswerList from './components/AnswerList/AnswerList';
import ThemesList from './components/ThemesList/ThemesList';
import DescriptionBlock  from './components/DescriptionBlock/DescriptionBlock';
import NextLevelButton  from './components/NextLevelButton/NextLevelButton';
import birdsData from './birdsData';

class App extends Component {
  state = {
    score: 0,
    round: 0,
    isRoundFinished: false,
    isGameFinished: false
  }

  startNewGame = () => {
    this.setState({
      score: 0,
      round: 0,
      isRoundFinished: false,
      isGameFinished: false
    });
  }

  increaseScoreBy(value) {
    this.setState((state, value) => ({
      score: state.counter + value
    }));
  }

  setNextRound = () => {
    this.setState((state) => ({
      round: state.round + 1,
      isFinished: state.round === birdsData.length
    }));
  }

  render() {
    return (
      <Fragment>
        <Header scoreValue={this.state.score}/>
        <ThemesList round={this.state.round}/>
        <QuestionBlock />
        <AnswerList />
        <DescriptionBlock birdElement={{name: 'Rerirf', latinName: 'asd', description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}}/>
        <NextLevelButton clickFunction={this.state.isFinished ? this.startNewGame : this.setNextRound} />
      </Fragment>
    );
  } 
}

export default App;

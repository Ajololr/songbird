import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import AnswerList from './components/AnswerList/AnswerList';
import ThemesList from './components/ThemesList/ThemesList';
import DescriptionBlock  from './components/DescriptionBlock/DescriptionBlock';
import NextLevelButton  from './components/NextLevelButton/NextLevelButton';
import birdsData from './birdsData';
import QuestionDescription from './components/QuestionDescription/QuestionDescription';

class App extends Component {
  state = {
    score: 0,
    round: 0,
    secretBird: null,
    selectedBird: null,
    isRoundFinished: false,
    isGameFinished: false
  }

  getRandomBirdIndex(count) {
    this.setState((state) => ({
      secretBird: Math.floor(Math.random() * count)
    })); 
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
        <ThemesList round={this.state.round} birdsData={birdsData}/>
        <QuestionDescription isRoundFinished={this.state.isRoundFinished} birdElement={birdsData[this.state.round].themeList[this.state.secretBird]}/>
        <AnswerList answersArray={birdsData[this.state.round].themeList}/>
        <DescriptionBlock birdElement={birdsData[this.state.round].themeList[this.state.selectedBird]}/>
        <NextLevelButton clickFunction={this.state.isGameFinished ? this.startNewGame : this.setNextRound} enabled={this.state.isRoundFinished}/>
      </Fragment>
    );
  } 
}

export default App;

import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import birdsData from './birdsData';
import Header from './components/Header/Header'
import AnswerList from './components/AnswerList/AnswerList';
import ThemesList from './components/ThemesList/ThemesList';
import NextLevelButton  from './components/NextLevelButton/NextLevelButton';
import DescriptionBlock  from './components/DescriptionBlock/DescriptionBlock';
import QuestionDescription from './components/QuestionDescription/QuestionDescription';

class App extends Component {
  state = {
    score: 0,
    round: 0,
    secretBird: this.setRandomBirdIndex(),
    selectedBird: null,
    isRoundFinished: false,
    isGameFinished: false,
    secretSong: null,
    selectedSong: null
  }

  constructor(props) {
    super(props);
    this.setSecretBirdSound();
  }

  startNewGame = () => {
    this.setState({
      score: 0,
      round: 0,
      selectedBird: null,
      isRoundFinished: false,
      isGameFinished: false,
      selectedSong: null
    });
    this.setRandomBirdIndex();
  }

  setRandomBirdIndex() {
    return Math.floor(Math.random() * 7);
  }

  increaseScoreBy = (value) => {
    this.setState((state, value) => ({
      score: state.counter + value
    }));
  }

  setNextRound = () => {
    this.setState((state) => ({
      round: state.round + 1,
      selectedBird: null,
      isGameFinished: state.round === birdsData.length
    }));
  }

  setSecretBirdSound() {
    const latinName = birdsData[this.state.round].themeList[this.state.secretBird].latinName;
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    fetch(`${proxy}https://www.xeno-canto.org/api/2/recordings?query=${latinName}`)
      .then(response => response.json())
      .then(data => {
        this.setState((state) => ({
          secretSong: data.recordings[0].file
        }));
      })
  }

  setSelectedBirdSound = (latinName) => {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    fetch(`${proxy}https://www.xeno-canto.org/api/2/recordings?query=${latinName}`)
      .then(response => response.json())
      .then(data => {
        this.setState((state) => ({
          selectedSong: data.recordings[0].file
        }));
      })
  }

  render() {
    return (
      <Fragment>
        <Header scoreValue={this.state.score}/>
        <ThemesList round={this.state.round} birdsData={birdsData}/>
        <QuestionDescription isRoundFinished={this.state.isRoundFinished} birdElement={birdsData[this.state.round].themeList[this.state.secretBird]} secretSong={this.state.secretSong}/>
        <AnswerList answersArray={birdsData[this.state.round].themeList} answer={this.state.secretBird}/>
        <DescriptionBlock birdElement={birdsData[this.state.round].themeList[this.state.selectedBird]}/>
        <NextLevelButton clickFunction={this.state.isGameFinished ? this.startNewGame : this.setNextRound} enabled={this.state.isRoundFinished}/>
      </Fragment>
    );
  } 
}

export default App;

import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import birdsData from './birdsData';
import Header from './components/Header/Header'
import AnswerList from './components/AnswerList/AnswerList';
import ThemesList from './components/ThemesList/ThemesList';
import CompleteBlock from './components/CompleteBlock/CompleteBlock'
import NextLevelButton  from './components/NextLevelButton/NextLevelButton';
import DescriptionBlock  from './components/DescriptionBlock/DescriptionBlock';
import QuestionDescription from './components/QuestionDescription/QuestionDescription';

class App extends Component {
  state = {
    score: 0,
    round: 0,
    roundScore: 5,
    secretBird: this.setRandomBirdIndex(),
    selectedBird: null,
    isRoundFinished: false,
    isGameFinished: false,
    secretSong: null,
    selectedSong: null,
    secretImage: null,
    selectedImage: null
  }

  constructor(props) {
    super(props);
    this.setSecretBirdSound();
  }

  startNewGame = () => {
    this.setState(state => ({
      score: 0,
      round: 0,
      roundScore: 5,
      secretBird: this.setRandomBirdIndex(),
      selectedBird: null,
      isRoundFinished: false,
      isGameFinished: false,
      secretSong: null,
      selectedSong: null,
      secretImage: null,
      selectedImage: null
    }), () => this.setSecretBirdSound());
    this.clearListIndicators();
  }

  setRandomBirdIndex() {
    return Math.floor(Math.random() * 6);
  }

  increaseScoreBy = (value) => {
    this.setState((state) => ({
      score: state.score + value
    }));
  }

  decreaseRoundScore = () => {
    this.setState((state) => ({
      roundScore: state.roundScore - 1
    }));
  }

  setNextRound = () => {
    if (this.state.isRoundFinished){
      this.setState((state) => ({
        round: state.round === 5 ? state.round : state.round + 1,
        roundScore: 5,
        selectedBird: null,
        secretBird: this.setRandomBirdIndex(),
        isRoundFinished: false,
        isGameFinished: state.round === 5,
        secretSong: null,
        selectedSong: null,
        secretImage: null,
        selectedImage: null
      }), () => this.setSecretBirdSound());
      this.clearListIndicators();
    }
  }

  setSecretBirdSound = () => {
    const latinName = birdsData[this.state.round].themeList[this.state.secretBird].latinName;
    console.log('Правильный ответ: ', this.state.secretBird, latinName);
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    fetch(`${proxy}https://www.xeno-canto.org/api/2/recordings?query=${latinName}`)
      .then(response => response.json())
      .then(data => {
        this.setState((state) => ({
          secretSong: data.recordings[0].file
        }));
      })
  }

  setSelectedBirdSound = () => {
    const latinName = birdsData[this.state.round].themeList[this.state.selectedBird].latinName;
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    fetch(`${proxy}https://www.xeno-canto.org/api/2/recordings?query=${latinName}`)
      .then(response => response.json())
      .then(data => {
        this.setState((state) => ({
          selectedSong: data.recordings[0].file
        }));
      })
  }

  checkAnswer = (event, answer) => {
    const target = event.target.closest('li');
    if (!target) return;
    const checkedId = target.id;
    if (!this.state.isRoundFinished) {
      if (checkedId === String(answer)) {
        this.setState((state) => ({
          isRoundFinished: true
        }));
        this.increaseScoreBy(this.state.roundScore)
        target.classList.add('right');
      } else if (!target.classList.contains('false')) {
        target.classList.add('false');
        this.decreaseRoundScore();
      }
    }
    this.setState((state) => ({
      selectedBird: checkedId,
      selectedSong: null,
    }), () => {
      this.setSelectedBirdSound();
    });
  }

  clearListIndicators = () => {
    document.querySelectorAll('.answer-item').forEach(element => {
      element.classList.remove('false');
      element.classList.remove('right');
    });
  }

  render() {
    return (
      <Fragment>
        <Header scoreValue={this.state.score}/>
        <ThemesList round={this.state.round} birdsData={birdsData}/>
        <CompleteBlock score={this.state.score} isFinished={this.state.isGameFinished}/>
        <QuestionDescription isRoundFinished={this.state.isRoundFinished} birdElement={!this.state.isGameFinished ? birdsData[this.state.round].themeList[this.state.secretBird] : null} secretSong={this.state.secretSong} isFinished={this.state.isGameFinished}/>
        <AnswerList answersArray={!this.state.isGameFinished ? birdsData[this.state.round].themeList : null} answer={this.state.secretBird} checkAnswer={this.checkAnswer} isFinished={this.state.isGameFinished}/>
        <DescriptionBlock birdElement={!this.state.isGameFinished ? birdsData[this.state.round].themeList[this.state.selectedBird] : null} selectedSong={this.state.selectedSong} isFinished={this.state.isGameFinished}/>
        <NextLevelButton clickFunction={this.state.isGameFinished ? this.startNewGame : this.setNextRound} enabled={this.state.isRoundFinished || this.setState.isGameFinished}/>
      </Fragment>
    );
  } 
}

export default App;

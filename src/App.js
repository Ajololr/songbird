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
    // this.setSecretBirdImage();
  }

  startNewGame = () => {
    this.setState({
      score: 0,
      round: 0,
      roundScore: 5,
      secretBird: this.setRandomBirdIndex(),
      selectedBird: null,
      isRoundFinished: false,
      isGameFinished: false,
      selectedSong: null,
      secretImage: null,
      selectedImage: null
    }, this.setSecretBirdSound());
    this.clearListIndicators();
  }

  setRandomBirdIndex() {
    return Math.floor(Math.random() * 6);
  }

  increaseScoreBy = (value) => {
    console.log(value);
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
        round: state.round + 1,
        roundScore: 5,
        selectedBird: null,
        secretBird: this.setRandomBirdIndex(),
        isRoundFinished: false,
        isGameFinished: state.round === 4,
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
    const checkedId = target.id;
    if (!this.state.isRoundFinished) {
      if (checkedId === String(answer)) {
        this.setState((state) => ({
          isRoundFinished: true
        }));
        this.increaseScoreBy(this.state.roundScore)
        target.classList.add('right');
      } else {
        target.classList.add('false');
        this.decreaseRoundScore();
      }
    }
    this.setState((state) => ({
      selectedBird: checkedId,
      selectedSong: null,
    }), this.setSelectedBirdSound);
  }

  clearListIndicators = () => {
    document.querySelectorAll('.answer-item').forEach(element => {
      element.classList.remove('false');
      element.classList.remove('right');
    });
  }

  setSecretBirdImage = () => {
    const latinName = birdsData[this.state.round].themeList[this.state.secretBird].latinName;
    const API_KEY = '7cca3ab415383e79'
    const URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&apikey=${API_KEY}&tagmode=all&extras=urlm&format=json&nojsoncallback&tags=${latinName}`;
    console.log(URL);
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // this.setState((state) => ({
        //   selectedSong: data.recordings[0].file
        // }));
      })
  }

  render() {
    return (
      <Fragment>
        <Header scoreValue={this.state.score}/>
        <ThemesList round={this.state.round} birdsData={birdsData}/>
        <QuestionDescription isRoundFinished={this.state.isRoundFinished} birdElement={birdsData[this.state.round].themeList[this.state.secretBird]} secretSong={this.state.secretSong}/>
        <AnswerList answersArray={birdsData[this.state.round].themeList} answer={this.state.secretBird} checkAnswer={this.checkAnswer}/>
        <DescriptionBlock birdElement={birdsData[this.state.round].themeList[this.state.selectedBird]} selectedSong={this.state.selectedSong}/>
        <NextLevelButton clickFunction={this.state.isGameFinished ? this.startNewGame : this.setNextRound} enabled={this.state.isRoundFinished}/>
      </Fragment>
    );
  } 
}

export default App;

import React from 'react';
import './QuestionDescription.scss'
import Image from '../Image/Image'
import Player from '../Player/Player'
import secretBird from '/RSSchool/songbird/src/assets/images/unknownBird.jpg'

function QuestionDescription({ isRoundFinished, birdElement }) {
  const birdSound = '';
  return isRoundFinished ? (
    <div className='question-description'>
      <Image birdImage={secretBird}/>
      <h3 className='bird-name'>{birdElement.name}</h3>
      <Player birdSound={birdSound}/>
    </div>
  ) : (
    <div className='question-description'>
      <Image birdImage={secretBird}/>
      <h3 className='bird-name'>**********</h3>
      <Player birdSound={birdSound}/>
    </div>
  )
}

export default QuestionDescription;
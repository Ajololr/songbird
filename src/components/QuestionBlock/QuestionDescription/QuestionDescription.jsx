import React from 'react';
import './QuestionDescription.scss'
import Image from './Image/Image'
import Player from './Player/Player'

function QuestionDescription({birdName, birdImage, birdSound}) {
  return (
    <div>
      <Image birdImage={birdImage}/>
      <h3>{birdName}</h3>
      <Player birdSound={birdSound}/>
    </div>
  )
}

export default QuestionDescription;
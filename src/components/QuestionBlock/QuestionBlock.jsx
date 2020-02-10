import React from 'react';
import QuestionDescription from '../QuestionDescription/QuestionDescription';
import img from '/RSSchool/songbird/src/assets/images/unknownBird.jpg'

function QuestionBlock() {
  return (
    <QuestionDescription birdName={'Кукушка'} birdImage={img} birdSound={'asd'}/>
  )
}

export default QuestionBlock;
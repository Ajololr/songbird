import React, { Fragment } from 'react';
import ThemesList from '../ThemesList/ThemesList'
import QuestionDescription from '../QuestionDescription/QuestionDescription';
import img from '/RSSchool/songbird/src/assets/images/unknownBird.jpg'

function QuestionBlock() {
  return (
    <Fragment>
      <ThemesList />
      <QuestionDescription birdName={'Кукушка'} birdImage={img} birdSound={'asd'}/>
    </Fragment>
  )
}

export default QuestionBlock;
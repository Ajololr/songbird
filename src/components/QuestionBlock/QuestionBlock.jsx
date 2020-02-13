import React, { Fragment } from 'react';
import ThemesList from './ThemesList/ThemesList'
import QuestionDescription from './QuestionDescription/QuestionDescription';

function QuestionBlock() {
  return (
    <Fragment>
      <ThemesList />
      <QuestionDescription birdName={} birdImage={} birdSound={}/>
    </Fragment>
  )
}

export default QuestionBlock;
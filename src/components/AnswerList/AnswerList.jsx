import React from 'react';
import AnswerItem from '../AnswerItem/AnswerItem'
import './AnswerList.scss'

function checkAnswer(event, answer) {
  console.log(answer);
  if (event.target.closest('li').id === String(answer)) {
    console.log(true);
  }
}

function AnswersList({ answersArray, answer }) {
  const listItems = answersArray.map(element => <AnswerItem text={element.name} id={element.id} />);
  return (
    <ul className='answer-list' onClick={(event) => checkAnswer(event, answer)}>{ listItems }</ul>
  )
}

export default AnswersList;
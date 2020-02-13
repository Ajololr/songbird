import React from 'react';
import AnswerItem from '../AnswerItem/AnswerItem'
import './AnswerList.scss'

function AnswersList({ answersArray, answer, checkAnswer }) {
  const listItems = answersArray.map(element => <AnswerItem text={element.name} id={element.id} />);
  return (
    <ul className='answer-list' onClick={(event) => checkAnswer(event, answer)}>{ listItems }</ul>
  )
}

export default AnswersList;
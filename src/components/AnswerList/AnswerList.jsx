import React from 'react';
import AnswerItem from '../AnswerItem/AnswerItem'
import './AnswerList.scss'

function AnswersList({ answersArray }) {
  const listItems = answersArray.map(element => <AnswerItem text={element.name} />);
  return (
    <ul className='answer-list'>{ listItems }</ul>
  )
}

export default AnswersList;
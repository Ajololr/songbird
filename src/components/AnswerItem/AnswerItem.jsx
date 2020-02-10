import React from 'react';
import './AnswerItem.scss'

function AnswerItem({ text }) {
  return (
    <li className='answer-item'><span className='answer-indicator'></span>{ text }</li>
  )
}

export default AnswerItem;
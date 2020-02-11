import React from 'react';
import './AnswerItem.scss'

function AnswerItem({ text, id }) {
  return (
    <li className='answer-item' id={id}><span className='answer-indicator'></span>{ text }</li>
  )
}

export default AnswerItem;
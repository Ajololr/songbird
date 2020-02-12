import React from 'react';
import './CompleteBlock.scss'

function CompleteBlock({ score, isFinished }) {
  if (isFinished) {
    return score === 30 ? (
      <div className='complete-block'>
        <h2 className='congrats'>Поздравляем с абсолютной победой!</h2>
        <h3 className='summary'>Вы прошли викторину и набрали <span className='bold'>{score}</span> из <span className='bold'>30</span> возможных баллов {'теперь ты знаешь кто чирикнул :)'}</h3>
      </div>
    ) : (
      <div className='complete-block'>
        <h2 className='congrats'>Поздравляем!</h2>
        <h3 className='summary'>Вы прошли викторину и набрали <span className='bold'>{score}</span> из <span className='bold'>30</span> возможных баллов</h3>
      </div>
    )
  }
  return null;
}

export default CompleteBlock;
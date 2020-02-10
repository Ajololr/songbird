import React from 'react';
import './Score.scss'

function Score({scoreValue}) {
  return (
    <h3 className='score'>Score: {scoreValue}</h3>
  )
}

export default Score;
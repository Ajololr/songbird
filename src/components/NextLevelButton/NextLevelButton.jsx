import React from 'react';
import './NextLevelButton.scss'

function NextLevelButton({clickFunction}) {
  return (
    <button onClick={clickFunction} className='next-level-button'>Next level</button>
  )
}

export default NextLevelButton;
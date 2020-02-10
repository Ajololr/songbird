import React from 'react';
import './NextLevelButton.scss'

function NextLevelButton({ clickFunction, enabled }) {
  return (
    <button onClick={clickFunction} className={'next-level-button' + (enabled ? 'enabled-button' : '')}>Next level</button>
  )
}

export default NextLevelButton;
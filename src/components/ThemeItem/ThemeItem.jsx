import React from 'react';
import './ThemeItem.scss'

function ThemeItem({themeName, isActive}) {
  return (
    <li className={'theme-item' + (isActive ? ' active-item' : '')}>{themeName}</li>
  )
}

export default ThemeItem;
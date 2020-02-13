import React from 'react';
import './ThemeItem.scss'

function ThemeItem({themeName}) {
  return (
    <li className={'theme-item'}>{themeName}</li>
  )
}

export default ThemeItem;
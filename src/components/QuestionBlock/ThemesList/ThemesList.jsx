import React from 'react';
import ThemeItem from './ThemeItem/ThemeItem';
import './ThemesList.scss'

function ThemesList() {
  return (
    <ul className={'themes-list'}>
      <ThemeItem themeName={'Разминка'}/>
      <ThemeItem themeName={'Разминка'}/>
      <ThemeItem themeName={'Разминка'}/>
      <ThemeItem themeName={'Разминка'}/>
      <ThemeItem themeName={'Разминка'}/>
      <ThemeItem themeName={'Разминка'}/>
    </ul>
  )
}

export default ThemesList;
import React from 'react';
import ThemeItem from '../ThemeItem/ThemeItem';
import './ThemesList.scss'

function ThemesList({ round, birdsData }) {
  const listItems = birdsData.map((element, index) => <ThemeItem key={index} themeName={element.themeName} isActive={round === index}/>);
  return (
    <ul className={'themes-list'}>{listItems}</ul>
  )
}

export default ThemesList;
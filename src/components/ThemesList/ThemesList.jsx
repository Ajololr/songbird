import React from 'react';
import ThemeItem from '../ThemeItem/ThemeItem';
import './ThemesList.scss'

function ThemesList({round}) {
  const answersArray = [{name: 'Один'}, {name: 'Два'}, {name: 'Два'}, {name: 'Два'}, {name: 'Два'}, {name: 'Два'}];
  const listItems = answersArray.map((element, index) => <ThemeItem key={index} themeName={element.name} isActive={round === index}/>);
  return (
    <ul className={'themes-list'}>{listItems}</ul>
  )
}

export default ThemesList;
import React from 'react';
import Logo from '../Logo/Logo'
import Score from '../Score/Score'
import './Header.scss'

function Header({scoreValue}) {
  return (
    <header className='header'>
      <Logo />
      <Score scoreValue={scoreValue}/>
    </header>
  )
}

export default Header;
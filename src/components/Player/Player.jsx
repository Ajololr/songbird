import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import React from 'react';
import './Player.scss'

function Player({ birdSound }) {
  return birdSound ? (
    <AudioPlayer showJumpControls={false} src={birdSound} />
  ) : <h3 className='loading'>Загружаем...</h3>
}

export default Player;
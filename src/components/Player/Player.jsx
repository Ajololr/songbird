import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import React from 'react';

function Player({ birdSound }) {
  return birdSound ? (
    <AudioPlayer showJumpControls={false} src={birdSound} />
  ) : <h3>Загружаем...</h3>
}

export default Player;
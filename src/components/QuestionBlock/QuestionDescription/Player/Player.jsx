import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import React from 'react';

function Player({birdSound}) {
  return (
    <AudioPlayer showJumpControls={false} src={birdSound} />
  )
}

export default Player;
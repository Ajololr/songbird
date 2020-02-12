import React from 'react';
import './DescriptionBlock.scss';
import Image from  '../Image/Image';
import Player from '../Player/Player';

function DescriptionBlock({ birdElement, selectedSong, isFinished }) {
  if (isFinished) return null;
  return birdElement ? (
    <div className='description-block'>
      <Image birdImage={birdElement.image}/>
      <h3 className='bird-name'>{birdElement.name}</h3>
      <h2 className='bird-latin-name'>{birdElement.latinName}</h2>
      <Player birdSound={selectedSong}/>
      <p className='description-text'>{birdElement.description}</p>
    </div>
  ) : <div className='description-block'>
    <p className='description-text'>Послушайте плеер. Выберите птицу из списка</p>
  </div>
}

export default DescriptionBlock;
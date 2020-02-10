import React from 'react';
import './DescriptionBlock.scss';
import Image from  '../Image/Image';
import Player from '../Player/Player';
import img from '/RSSchool/songbird/src/assets/images/unknownBird.jpg';

function DescriptionBlock({birdElement}) {
  return (
    <div className='description-block'>
      <Image birdImage={img}/>
      <h3 className='bird-name'>{birdElement.name}</h3>
      <h2 className='bird-latin-name'>{birdElement.latinName}</h2>
      <Player birdSound={'asd'}/>
      <p className='description-text'>{birdElement.description}</p>
    </div>
  )
}

export default DescriptionBlock;
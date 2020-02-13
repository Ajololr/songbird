import React from 'react';
import './Image.scss'

function Image({birdImage}) {
  return birdImage ? (
    <img className={'bird-image'} src={birdImage} alt=''/>
  ) : null;
}

export default Image;
import '../Styles/Card.scss';
import React from 'react';
import bigfoot from '../assets/bigfoot.jpg'

const SightingCard = () => {
  return (
    <div className='card'>
      <p className='name'>fake card</p>
      <p className='location'>fake location</p>
      <img src={bigfoot} alt='bigfoot' className='card-img' />
    </div>
  )
}

export default SightingCard;
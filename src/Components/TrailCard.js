import '../Styles/TrailCard.scss';
import React from 'react';
import bigfoot from '../assets/bigfoot.jpg'

const SightingCard = () => {
  return (
    <div className='trail-card'>
      <div className='gold-trail-container'>
        <img src={bigfoot} alt='bigfoot' className='card-img' />
      </div>
      <div className='trail-details-container'>
        <p className='trail-name'>fake card Text</p>
        <p className='trail-link'>fake link</p>
      </div>
    </div>
  )
}

export default SightingCard;

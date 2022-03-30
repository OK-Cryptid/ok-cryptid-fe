import '../Styles/Card.scss';
import React from 'react';
import { Link } from 'react-router-dom'
import bigfoot from '../assets/bigfoot.jpg'

const SightingCard = ({ id, name, image, location }) => {

  return (
    <>
      <Link
        to={`/singlesighting/${name}/${id}`}
        className='card' id={id}
      >
        <div className='name-container'>
          <div className='name'>{name}</div>
          <div className='location'>{location}</div>
        </div>
        <img
          src={image}
          alt='bigfoot'
          className='card-img'
        />
      </Link>
    </>
  )
}

export default SightingCard;

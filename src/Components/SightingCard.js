import '../Styles/Card.scss';
import React from 'react';
import { Link } from 'react-router-dom'
import bigfoot from '../assets/bigfoot.jpg'

const SightingCard = ({ id, name, image }) => {
  return (
    <>
    <Link to={`/singlecryptid/${name}`} className='card' id={id}>
      <div className='name'>{name}</div>
      <img src={image} alt='bigfoot' className='card-img' />
    </Link>
    </>
  )
}

export default SightingCard;

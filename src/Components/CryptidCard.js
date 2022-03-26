import '../Styles/Card.scss';
import React from 'react';

const CryptidCard = ({ id, name, image }) => {
  return (
    <div className='card' id={id}>
      <p className='name'>{name}</p>
      <img src={image} alt='bigfoot' className='card-img' />
    </div>
  )
}

export default CryptidCard;

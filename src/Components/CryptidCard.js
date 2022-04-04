import '../Styles/Card.scss'
import React from 'react'
import { Link } from 'react-router-dom'

const CryptidCard = ({ id, name, image }) => {
  return (
    <>
      <Link
        to={`/singlecryptid/${name}`} className='card'
        id={id}
      >
        <div className='name-container'>
          <div className='name'>{name}</div>
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

export default CryptidCard

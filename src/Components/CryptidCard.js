import '../Styles/Card.scss'
import React from 'react'
import { Link } from 'react-router-dom'

const CryptidCard = ({ id, name, image }) => {
  console.log(name)
  return (
    <Link to={`/singlecryptid/${name}`} className='card' id={id}>
      <p className='name'>{name}</p>
      <img src={image} alt='bigfoot' className='card-img' />
    </Link>
  )
}

export default CryptidCard

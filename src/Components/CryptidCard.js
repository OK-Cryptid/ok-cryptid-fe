import '../Styles/Card.scss'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CryptidContext } from '../Context/CryptidContext';

const CryptidCard = ({ id, name, image }) => {
  const { setCryptid } = useContext(CryptidContext)

  return (
    <>
      <Link
        to={`/singlecryptid/${name}`} className='card'
        id={id}
        onClick={() => setCryptid(name)}
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

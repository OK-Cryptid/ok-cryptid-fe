import React, { useEffect, useContext } from 'react'
import '../Styles/SingleCryptid.scss'
import { NavigationContext } from '../Context/NavigationContext'
import { ErrorContext } from '../Context/ErrorContext'
import FootPrints from './FootPrints'
import { gql, useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import { CryptidContext } from '../Context/CryptidContext'

const GET_SINGLE_CRYPTID = gql`
  query GetCryptid($name: String!) {
    cryptidByName(name: $name){
        id
        name
        image
        dangerLevel
        description
    }
  }
`

const SingleCryptid = () => {
  const { cryptid } = useContext(CryptidContext)
  const { setClick } = useContext(NavigationContext)
  const { setError } = useContext(ErrorContext)
  const { data, error, loading } = useQuery(GET_SINGLE_CRYPTID, {
    variables: {
      name: cryptid
    }
  })

  console.log(loading, data, error)

  useEffect(() => {
    setClick(false)
  }, [])


  if (loading) return "Loading..."

  if (error) {
    setError(error)
  }

  return (
    <div className='single-cryptid-container'>
      <div className='cryptid-img-container'>
        <img src={data.cryptidByName[0].image} alt='bigfoot' className='single-cryptid-photo' />
      </div>
      <div className='cryptid-info-container'>
        <div className='cryptid-details'>
          <div className='name-danger-container'>
            <h1 className='cryptid-name'>{data.cryptidByName[0].name}</h1>
            <p className='cryptid-danger'>Danger Level: <span className='gold-container'>{data.cryptidByName[0].dangerLevel}/10</span></p>
          </div>
          <p className='cryptid-description'>Description: {data.cryptidByName[0].description}</p>
          <Link to={`/singlecryptidsightings/${cryptid}`}>
            <button className='cryptid-button-sightings'>Sightings of {data.cryptidByName[0].name}</button>
          </Link>
        </div>
        <FootPrints />
      </div>
    </div>
  )
}
export default SingleCryptid;

import '../Styles/AllSightings.scss';
import SightingCard from './SightingCard';
import React, { useState, useContext } from 'react';
import { CryptidContext } from '../Context/CryptidContext';
import { useQuery, gql } from '@apollo/client';
import { ErrorContext } from '../Context/ErrorContext'

const GET_SINGLE_CRYPTID = gql`
  query GetCryptid($name: String!) {
    cryptidByName(name: $name){
        sightings {
          id
          location
          image
        }
    }
  }
`

const SingleCryptidSightings = () => {
  const [display, setDisplay] = useState(false)
  const { setError } = useContext(ErrorContext)
  const { cryptid, setCryptid } = useContext(CryptidContext)
  const { data, error, loading } = useQuery(GET_SINGLE_CRYPTID, {
    variables: {
      name: cryptid
    }
  })

  const clearCryptid = () => {
    setCryptid()
  }
  const toggleDisplay = () => {
    setDisplay(!display)
  }
  if (loading) return "Loading..."

  if (error) {
    return setError(error)
  }

  const sightingCards = data.cryptidByName[0].sightings.map(sighting => {
    console.log(sighting)
    return (
      <SightingCard
        key={sighting.id}
        id={sighting.id}
        name={cryptid}
        location={sighting.location}
        image={sighting.image}
      />


    )
  })


  return (
    <>
      <div className='sightings-header'>
        <h1 className='sightings-text'>{cryptid} Sightings</h1>
      </div>
      <div className='all-sightings-container'>
        {sightingCards}
      </div>

    </>
  )
}

export default SingleCryptidSightings;
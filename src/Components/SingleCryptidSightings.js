import '../Styles/AllSightings.scss';
import SightingCard from './SightingCard';
import React, { useContext } from 'react';
import { CryptidContext } from '../Context/CryptidContext';
import { useQuery, gql } from '@apollo/client';
import ErrorModal from './ErrorModal';

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
  const { cryptid } = useContext(CryptidContext)
  const { data, error, loading } = useQuery(GET_SINGLE_CRYPTID, {
    variables: {
      name: cryptid
    }
  })

  if (loading) return "Loading..."

  if (error) return <ErrorModal gqlError={error}/>

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
import '../Styles/AllSightings.scss';
import SightingCard from './SightingCard';
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import ErrorModal from './ErrorModal';
import Loading from './Loading';
import { useParams } from 'react-router-dom';

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
  const cryptid = useParams().name
  const { data, error, loading } = useQuery(GET_SINGLE_CRYPTID, {
    variables: {
      name: cryptid
    }
  })

  if (loading) return <Loading />

  if (error) return <ErrorModal gqlError={error}/>

  const sightingCards = data.cryptidByName[0].sightings.map(sighting => {
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
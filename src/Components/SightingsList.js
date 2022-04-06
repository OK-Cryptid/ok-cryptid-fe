import React, { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import SightingCard from './SightingCard'
import ErrorModal from './ErrorModal'

const Search_Sightings = gql`
query GetSightingsByLocation($location: String!){
sightingByLocation(location: $location){
		id
    image
    location
    cryptid {
      name
      id
    }
  }
}
`

const SightingsList = ({ location, name }) => {
  const [searchLocation, setSearchLocation] = useState(location)
  const { data, error, loading } = useQuery(Search_Sightings, { variables: { location: searchLocation }, fetchPolicy: "no-cache" })

  useEffect(() => {
    setSearchLocation(location)
  }, [location])

  if (loading) return null

  if (error) return <ErrorModal gqlError={error} />

  let pageData = data.sightingByLocation

  if (name !== '') {
    pageData = data.sightingByLocation.filter(sighting => {
      return sighting.cryptid.name === name
    })
  }
  const sightingCards = pageData.map(sighting => {
    return (
      <SightingCard
        key={sighting.id}
        id={sighting.id}
        location={sighting.location}
        image={sighting.image}
        name={sighting.cryptid.name}
      />
    )
  })

  return (
    <>
      {pageData.length &&
        <div className='all-sightings-container'>
          {sightingCards}
        </div>
      }
      {!pageData.length &&
        <div className='no-sightings-container'>
          <p className='no-sightings'>
            Cryptids have evaded being sighted at this location. Try another search.
          </p>
        </div>
      }
    </>
  )
}

export default SightingsList

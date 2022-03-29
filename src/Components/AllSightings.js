import '../Styles/AllSightings.scss';
import SightingCard from './SightingCard';
import React, { useState, useContext, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { ErrorContext } from '../Context/ErrorContext'
import { NavigationContext } from '../Context/NavigationContext'

const GET_ALL_SIGHTINGS = gql`
  query GetAllSightings{
    getCryptids{
      name
      sightings {
        id
        location
        image
      }
    }
  }
`

const AllSightings = () => {
  const [display, setDisplay] = useState(false)
  const { setError } = useContext(ErrorContext)
  const { setClick } = useContext(NavigationContext)
  const { data, error, loading } = useQuery(GET_ALL_SIGHTINGS)

  useEffect(() => {
    setClick(true)
  }, [])

  const toggleDisplay = () => {
    setDisplay(!display)
  }
  if (loading) return "Loading..."

  if (error) {
    return setError(error)
  }
  console.log(data)

  const sightingCards = data.getCryptids.map(cryptid => {
    return cryptid.sightings.map(sighting => {
      return (
        <SightingCard
          key={sighting.id}
          location={sighting.location}
          image={sighting.image}
          name={cryptid.name}
        />
      )
    })
  })


  return (
    <>
      <div className='sightings-header'>
        <h1 className='sightings-text'>All Sightings</h1>
        <div className='search-container'>
          <div>
            <button
              className='cryptid-button'
              onClick={toggleDisplay}
            >
              Search by Cryptids
            </button>
            {display &&
              <div className='dropdown-container'>
                <p>things go here</p>
              </div>
            }
          </div>
          <form>
            <input
              className='zipcode-input'
              type="text"
              placeholder="Search by Zipcode"
            />
          </form>
        </div>
      </div>
      <div className='all-sightings-container'>
        {sightingCards}
      </div>

    </>
  )
}

export default AllSightings;

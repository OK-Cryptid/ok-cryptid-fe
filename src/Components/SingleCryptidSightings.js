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
  console.log("cryptid: ", cryptid)
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
  console.log(data)

  const sightingCards = data.cryptidByName[0].sightings.map(sighting => {
    return (
      <SightingCard
        key={sighting.id}
        location={sighting.location}
        image={sighting.image}
      />


    )
  })


  return (
    <>
      <div className='sightings-header'>
        <h1 className='sightings-text'>{cryptid} Sightings</h1>
        {/* <div className='search-container'>
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
          </form> */}
        {/* </div> */}
      </div>
      <div className='all-sightings-container'>
        {sightingCards}
      </div>

    </>
  )
}

export default SingleCryptidSightings;
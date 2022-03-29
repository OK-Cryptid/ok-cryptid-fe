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
  const [pageData, setPageData] = useState({})
  const { setError } = useContext(ErrorContext)
  const { setClick } = useContext(NavigationContext)
  const { data, error, loading } = useQuery(GET_ALL_SIGHTINGS)

  useEffect(() => {
    setClick(true)
    setPageData(data)
  }, [])

  const toggleDisplay = () => {
    setDisplay(!display)
  }

  const handleClick = (event) => {
    toggleDisplay()
    filterSightings(event.target.id)
  }

  const filterSightings = (name) => {
    data.getCryptids.filter(cryptid => {
      return cryptid.name === name
    })
  }

  const resetData = () => {
    toggleDisplay()
    setPageData(data)
  }

  if (loading) return "Loading..."

  if (error) return setError(error)

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

  const dropDownButtons = data.getCryptids.map(cryptid => {
    return (
      <button id={cryptid.name} onClick={(event) => handleClick(event)}>{cryptid.name}</button>
    )
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
                <button onClick={() => resetData()}>All Cryptid Sightings</button>
                {dropDownButtons}
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

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
  const { data, error, loading } = useQuery(GET_ALL_SIGHTINGS)
  const [display, setDisplay] = useState(false)
  const [pageData, setPageData] = useState(null)
  const { setError } = useContext(ErrorContext)
  const { setClick } = useContext(NavigationContext)

  useEffect(() => {
    setClick(true)
  }, [])

  const toggleDisplay = () => {
    setDisplay(!display)
  }

  const handleClick = (event) => {
    toggleDisplay()
    filterSightings(event.target.id)
  }

  const filterSightings = (name) => {
    const filteredSightings = data.getCryptids.filter(cryptid => {
      return cryptid.name === name
    })
    setPageData(filteredSightings)
  }

  const resetData = () => {
    toggleDisplay()
    setPageData(data.getCryptids)
  }

  if (loading) return "Loading..."

  if (!loading && !pageData) return setPageData(data.getCryptids)

  if (error) return setError(error)

  const sightingCards = pageData.map(cryptid => {
    return cryptid.sightings.map(sighting => {
      return (
        <SightingCard
          key={sighting.id}
          id={sighting.id}
          location={sighting.location}
          image={sighting.image}
          name={cryptid.name}
        />
      )
    })
  })

  const dropDownButtons = data.getCryptids.map(cryptid => {
    return (
      <button
        key={cryptid.id}
        id={cryptid.name}
        className='dropdown-button'
        onClick={(event) => handleClick(event)}
      >
        {cryptid.name}
      </button>
    )
  })
  console.log("data: ", data)
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
                <button
                  onClick={() => resetData()}
                  className='dropdown-button'
                >
                  All Cryptid Sightings
                </button>
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
        {pageData && sightingCards}
      </div>
    </>
  )
}

export default AllSightings;

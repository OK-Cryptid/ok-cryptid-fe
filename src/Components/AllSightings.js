import '../Styles/AllSightings.scss';
import SightingCard from './SightingCard';
import React, { useState, useContext, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { NavigationContext } from '../Context/NavigationContext'
import Loading from './Loading.js'
import ErrorModal from './ErrorModal'


const Search_Sightings = gql`
query GetSightingsByLocation($location: String!){
sightingByLocation(location: $location){
		id
    image
    location
  }
}
`

const AllSightings = () => {
  const [display, setDisplay] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [pageData, setPageData] = useState(null)
  const { setClick } = useContext(NavigationContext)
  const { data, error, loading } = useQuery(Search_Sightings, {variables: {location: searchTerm}, fetchPolicy: "no-cache"})
  
  useEffect(() => {
    setClick(true)
  }, [])

  if (loading) return <Loading/>
  
  if (error) return <ErrorModal gqlError={error}/>

  if (!loading && !pageData) return setPageData(data.sightingsByLocation)
  
  
  const searchCryptids = (event) => {
    setSearchTerm(event.target.value)
  }

  const toggleDisplay = () => {
    setDisplay(!display)
  }

  const handleClick = (event) => {
    toggleDisplay()
    filterSightings(event.target.id)
  }

  const filterSightings = (name) => {
    const filteredSightings = data.sightingsByLocation.filter(sighting => {
      return sighting.cryptid.name === name
    })
    setPageData(filteredSightings)
  }

  const resetData = () => {
    toggleDisplay()
    setPageData(data.sightingsByLocation)
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
  console.log(data.sightingsByLocation)
  const dropDownButtons = data.sightingsByLocation.map(sighting => {
    return (
      <button
        key={sighting.cryptid.id}
        id={sighting.cryptid.name}
        className='dropdown-button'
        onClick={(event) => handleClick(event)}
      >
        {sighting.cryptid.name}
      </button>
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
              onChange={searchCryptids}
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

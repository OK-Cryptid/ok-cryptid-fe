import '../Styles/AllSightings.scss';
import SightingCard from './SightingCard';
import React, { useState, useContext, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { NavigationContext } from '../Context/NavigationContext'
import Loading from './Loading.js'
import ErrorModal from './ErrorModal'
import DropDownButtons from './DropDownButtons';


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

const AllSightings = () => {
  const [display, setDisplay] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [pageData, setPageData] = useState(null)
  const [cryptids, setCryptids] = useState(null)
  const { setClick } = useContext(NavigationContext)
  const { data, error, loading } = useQuery(Search_Sightings, { variables: { location: searchTerm }, fetchPolicy: "no-cache" })

  useEffect(() => {
    setClick(true)
  }, [])

  const searchCryptids = (event) => {
    event.preventDefault()
    setPageData(null)
    setSearchTerm(event.target.value)
  }

  const toggleDisplay = () => {
    setDisplay(!display)
  }

  const handleClick = (event) => {
    toggleDisplay()
    filterSightings(event.target.id)
  }

  if (loading) return null

  if (error) return <ErrorModal gqlError={error} />

  if (!loading && !pageData) return setPageData(data.sightingByLocation)

  const filterSightings = (name) => {
    const filteredSightings = data.sightingByLocation.filter(sighting => {
      return sighting.cryptid.name === name
    })
    setPageData(filteredSightings)
  }

  const resetData = () => {
    toggleDisplay()
    setPageData(data.sightingByLocation)
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
            {display && <DropDownButtons handleClick={handleClick} resetData={resetData} />
            }
          </div>
          <form>
            <input
              className='zipcode-input'
              type='text'
              placeholder='Search by State'
              autoFocus={true}
              value={searchTerm}
              onChange={(event) => searchCryptids(event)}
            />
          </form>
        </div>
      </div>
      <div className='all-sightings-container'>
        {pageData.length ? sightingCards : <p className='no-sightings'>There are no sightings at this location. Try another search.</p>}
      </div>
    </>
  )
}

export default AllSightings;

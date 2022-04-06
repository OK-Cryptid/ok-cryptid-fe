import '../Styles/AllSightings.scss'
import React, { useState, useContext, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import { useParams, useSearchParams } from 'react-router-dom'
import { NavigationContext } from '../Context/NavigationContext'
import Loading from './Loading.js'
import DropDownButtons from './DropDownButtons'
import SightingsList from './SightingsList'

const AllSightings = () => {
  const [display, setDisplay] = useState(false)
	const [location, setLocation] = useState('')
	const [name, setName] = useState('')
	const [searchParams, setSearchParams] = useSearchParams();
  const { setClick } = useContext(NavigationContext)

  useEffect(() => {
    setClick(true)
  }, [])

  useEffect(() => {
    const nameParam = searchParams.get('name') || ''
    const locationParam = searchParams.get('location') || ''
    setName(nameParam)
    setLocation(locationParam)
  }, [searchParams])

  const searchCryptids = (event) => {
    event.preventDefault()
		setSearchParams({name: name, location: event.target.value})
  }

  const toggleDisplay = () => {
    setDisplay(!display)
  }

  const handleClick = (event) => {
    toggleDisplay()
		setSearchParams({name: event.target.id, location: location})
  }

  const resetData = () => {
    toggleDisplay()
    setSearchParams({})
  }

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
							<DropDownButtons
								handleClick={handleClick}
								resetData={resetData}
							/>
            }
          </div>
          <form onSubmit={(event) => event.preventDefault()}>
            <input
              className='zipcode-input'
              type='text'
              placeholder='Search by State'
              autoFocus={true}
              value={location}
              onChange={(event) => searchCryptids(event)}
            />
          </form>
        </div>
      </div>
			<SightingsList location={location} name={name}/>
    </>
  )
}

export default AllSightings;

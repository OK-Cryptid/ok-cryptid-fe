import React, { useEffect, useContext, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import '../Styles/SingleSighting.scss'
import { NavigationContext } from '../Context/NavigationContext'
import FootPrints from './FootPrints'
import { gql, useQuery } from '@apollo/client'
import Loading from './Loading.js'
import ErrorModal from './ErrorModal'

const GET_SINGLE_SIGHTING = gql`
  query GetSighting($id: ID!) {
    sightingById(id: $id){
 			image
      location
      title
      description
      trailLinks
    }
  }
`

const SingleSighting = () => {
  const { setClick } = useContext(NavigationContext)
  const sightingDescription = useRef(null)
  const [overflown, setOverflown] = useState(false)
  const id = parseInt(useParams().id)
  const name = useParams().name
  const { data, loading, error } = useQuery(GET_SINGLE_SIGHTING, {
    variables: {
      id: id
    }
  })

  useEffect(() => {
    setClick(false)
  }, [])

  const hasOverflow = (current) => {
    return current.scrollHeight > current.offsetHeight || current.scrollWidth > current.offsetWidth;
  }

  useEffect(() => {
    if (sightingDescription.current && hasOverflow(sightingDescription.current)) {
      setOverflown(true)
    }
  }, [sightingDescription])

  if (loading) return <Loading />

  if (error) return <ErrorModal gqlError={error} />

  const trailLinks = data.sightingById.trailLinks.map((link, index) => {
    return (
      <a className='trail-links' href={link} key={index} target='_blank' rel="noreferrer">Trail {index + 1}</a>
    )
  })

  const onScroll = () => {
    const current = sightingDescription.current
    if (!hasOverflow(current)) {
      setOverflown(false)
    }
  }

  const formatDate = (date) => {
    let [year, month, day] = date.split('-');
    return [month, day, year].join('-');
  }

  return (
    <div className='single-sighting-container'>
      <div className='sighting-img-container'>
        <img src={data.sightingById.image} alt='bigfoot' className='sighting-photo' />
        <div className='sighting-name-box'>
          <p className='sighting-name-text'>{name}</p>
        </div>
      </div>
      <div className='sighting-info-container'>
        <div className='sighting-details'>
          <p className='sighting-title'>{formatDate(data.sightingById.title)}</p>
          <p className='sighting-location'>Location: {data.sightingById.location}</p>
          <p ref={sightingDescription} id='sightingDescription' className='sighting-description'
            onScroll={onScroll}
          >{data.sightingById.description}</p>
          {overflown && < div className="arrow">
            <span></span>
          </div>}
          <p className='near-text'>Nearby Trails:</p>
          <div className='trails-container'>
            {trailLinks}
          </div>
        </div>
        <FootPrints />
      </div>
    </div >
  )
}

export default SingleSighting;

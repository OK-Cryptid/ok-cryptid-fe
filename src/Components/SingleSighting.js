import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import '../Styles/SingleSighting.scss'
import { NavigationContext } from '../Context/NavigationContext'
import FootPrints from './FootPrints'
import { gql, useQuery } from '@apollo/client'
import { ErrorContext } from '../Context/ErrorContext'

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
  const { setError } = useContext(ErrorContext)
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

  if (loading) return "Loading..."

  if (error) return setError(error)

  const trailLinks = data.sightingById.trailLinks.map((link, index) => {
    return (
      <a className='trail-links' href={link} key={index} target='_blank'>Trail {index + 1}</a>
    )
  })

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
          <p className='sighting-title'>{data.sightingById.title}</p>
          <p className='sighting-location'>Location: {data.sightingById.location}</p>
          <p className='sighting-description'>{data.sightingById.description}</p>
          <div className='trails-container'>
            <p className='near-text'>Nearby Trails:</p>
            {trailLinks}
          </div>
        </div>
        <FootPrints />
      </div>
    </div>
  )
}

export default SingleSighting;

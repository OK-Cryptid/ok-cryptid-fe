import React, { useEffect, useContext } from 'react'
import '../Styles/SingleSighting.scss'
import TrailCard from './SingleSighting'
import { NavigationContext } from '../Context/NavigationContext'
import {gql, useQuery} from '@apollo/client'
import bigfoot from '../assets/bigfoot.jpg'



const SingleSighting = () => {

  useEffect(() => {
    setClick(false)
  }, [])

  const { setClick } = useContext(NavigationContext)


  return (
    <div className='single-sighting-container'>
      <div className='sighting-img-container'>
        <img src={bigfoot} alt='bigfoot' className='sighting-photo' />
        <div className='sighting-name-box'>
          <p className='sighting-name-text'>Bigfoot</p>
        </div>
      </div>
      <div className='sighting-info-container'>
        <p className='sighting-location'>Location: placeholder</p>
        <p className='near-text'>Nearby Trails:</p>
          <div className='trails-container'>
            <div className='trail-card'>
              <div className='gold-trail-container'>
                <img src={bigfoot} alt='bigfoot' className='card-img' />
              </div>
              <div className='trail-details-container'>
                <p className='trail-name'>fake card Text</p>
                <p className='trail-link'>fake link</p>
              </div>
            </div>
            <div className='trail-card'>
              <div className='gold-trail-container'>
                <img src={bigfoot} alt='bigfoot' className='card-img' />
              </div>
              <div className='trail-details-container'>
                <p className='trail-name'>fake card Text</p>
                <p className='trail-link'>fake link</p>
              </div>
            </div>
            <div className='trail-card'>
              <div className='gold-trail-container'>
                <img src={bigfoot} alt='bigfoot' className='card-img' />
              </div>
              <div className='trail-details-container'>
                <p className='trail-name'>fake card Text</p>
                <p className='trail-link'>fake link</p>
              </div>
            </div>
            <div className='trail-card'>
              <div className='gold-trail-container'>
                <img src={bigfoot} alt='bigfoot' className='card-img' />
              </div>
              <div className='trail-details-container'>
                <p className='trail-name'>fake card Text</p>
                <p className='trail-link'>fake link</p>
              </div>
            </div>
          </div>
        <p className='cryptid-danger'>
          Danger Level:
          <span className='danger-container'>fake/10</span>
        </p>
      </div>
    </div>
  )
}

export default SingleSighting;

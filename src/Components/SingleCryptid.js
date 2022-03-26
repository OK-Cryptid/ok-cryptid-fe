import React, { useEffect, useContext } from 'react'
import '../Styles/SingleCryptid.scss'
import { NavigationContext } from '../Context/NavigationContext'
import {gql, useQuery} from '@apollo/client'
import bigfoot from '../assets/bigfoot.jpg'
import { useParams } from 'react-router-dom'

const GET_SINGLE_CRYPTID = gql`
  query GetCryptid($name: String!) {
    cryptidByName(name: $name){
        id
        name
        image
        dangerLevel
        description
    }
  }
`

const SingleCryptid = () => {
  const {name} = useParams()
  
  const {data, error, loading} = useQuery(GET_SINGLE_CRYPTID, {
    variables:
    name
  })

  console.log({data, error, loading})
  const { setClick } = useContext(NavigationContext)

  useEffect(() => {
    setClick(false)
  }, [])

  return (
    <div className='single-cryptid-container'>
      <div className='cryptid-img-container'>
        <img src={bigfoot} alt='bigfoot' className='temp-photo' />
      </div>
      <div className='cryptid-info-container'>
        <h1 className='cryptid-name'>Name</h1>
        <p className='cryptid-location'>Location: placeholder</p>
        <p className='cryptid-description'>Description: Placeholder</p>
        <button className='cryptid-button-sightings'>Sightings of Name</button>
        <p className='cryptid-danger'>Danger Level: fake/10</p>
      </div>
    </div>
  )
}

export default SingleCryptid;

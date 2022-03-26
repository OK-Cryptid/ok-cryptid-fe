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
  
  useEffect(() => {
    setClick(false)
  }, [])

  console.log({data, error, loading})
  const { setClick } = useContext(NavigationContext)

  if (loading) return "Loading..."
  
  if (error) return <pre>{error.message}</pre>


  return (
    <div className='single-cryptid-container'>
      <div className='cryptid-img-container'>
        <img src={data.cryptidByName.image} alt='bigfoot' className='temp-photo' />
      </div>
      <div className='cryptid-info-container'>
        <h1 className='cryptid-name'>{data.cryptidByName.name}</h1>
        <p className='cryptid-description'>Description: {data.cryptidByName.description}</p>
        <button className='cryptid-button-sightings'>Sightings of Name</button>
        <p className='cryptid-danger'>Danger Level: {data.cryptidByName.dangerLevel}</p>
      </div>
    </div>
  )
}

export default SingleCryptid;

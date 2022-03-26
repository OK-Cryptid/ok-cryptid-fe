import '../Styles/Home.scss'
import Card from './Card'
import React, { useContext, useEffect } from 'react'
import { NavigationContext } from '../Context/NavigationContext'
import { useQuery, gql } from "@apollo/client"
import bigfoot from '../assets/bigfoot.jpg'

const GET_CRYPTIDS = gql`
    query GetCryptids {
     cryptids {
        name
        id
        image
    }
  }
`;



const Home = () => {
  const { setClick } = useContext(NavigationContext)
  const { data, loading, error } = useQuery(GET_CRYPTIDS)
  console.log(data)


  useEffect(() => {
    setClick(false)
  }, [])

  return (
    <>
    <div className='home-message-container'>
      <p className='home-message'>
        Ok Cryptid is here to help you have your very own cryptid encounter! We’ll help you identify the trails where you are  mostly likely to cross paths with your favorite cryptid!
      </p>
    </div>
    <div className='home-card-container'>
      <div>
        <p>fake card</p>
        <img src={bigfoot} alt='bigfoot' className='temp-photo' />
      </div>
      <div>
        <p>fake card</p>
        <img src={bigfoot} alt='bigfoot' className='temp-photo' />
      </div>
      <div>
        <p>fake card</p>
        <img src={bigfoot} alt='bigfoot' className='temp-photo' />
      </div>
      <div>
        <p>fake card</p>
        <img src={bigfoot} alt='bigfoot' className='temp-photo' />
      </div>
      <div>
        <p>fake card</p>
        <img src={bigfoot} alt='bigfoot' className='temp-photo' />
      </div>
      <div>
        <p>fake card</p>
        <img src={bigfoot} alt='bigfoot' className='temp-photo' />
      </div>

    </div>
    </>
  )
}

export default Home

import '../Styles/Home.scss'
import CryptidCard from './CryptidCard'
import React, { useContext, useEffect } from 'react'
import { NavigationContext } from '../Context/NavigationContext'
import { ErrorContext } from '../Context/ErrorContext'
import { useQuery, gql } from "@apollo/client"

const GET_CRYPTIDS = gql`
    query getCryptids {
     cryptids {
        name
        id
        image
    }
  }
`

const Home = () => {
  const { setClick } = useContext(NavigationContext)
  const { setError } = useContext(ErrorContext)
  const { data, loading, error } = useQuery(GET_CRYPTIDS, {
    context: {
      headers: {
        "x-mock-match-request-body": true
      }
    }
  })

  useEffect(() => {
    setClick(false)
  }, [])


  if (loading) return "Loading..."

  if (error) {
    setError(error)
  }

  const cryptidCards = data.cryptids.map(cryptid =>
        <CryptidCard
          key={cryptid.id}
          id={cryptid.id}
          name={cryptid.name}
          image={cryptid.image}
        />)

  return (
    <>
    <div className='home-message-container'>
      <p className='home-message'>
        Ok Cryptid is here to help you have your very own cryptid encounter! We’ll help you identify the trails where you are  mostly likely to cross paths with your favorite cryptid!
      </p>
    </div>
    <div className='home-card-container'>
      {cryptidCards}
    </div>
    </>
  )
}

export default Home

import '../Styles/Home.scss'
import CryptidCard from './CryptidCard'
import React, { useContext, useEffect } from 'react'
import { NavigationContext } from '../Context/NavigationContext'
import { useQuery, gql } from "@apollo/client"

const GET_CRYPTIDS = gql`
    query GetCryptids {
     cryptids {
        name
        id
        image
    }
  }
`

const Home = () => {
  const { setClick } = useContext(NavigationContext)
  const { data, loading, error } = useQuery(GET_CRYPTIDS)

  useEffect(() => {
    setClick(false)
  }, [])

  
  if (loading) return "Loading..."
  
  if (error) return <pre>{error.message}</pre>
  
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

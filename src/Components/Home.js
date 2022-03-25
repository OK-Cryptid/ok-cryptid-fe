import './Home.scss'
import Card from './Card'
import React, { useContext, useEffect } from 'react'
import { NavigationContext } from '../Context/NavigationContext'

const Home = () => {
  const { setClick } = useContext(NavigationContext)

  useEffect(() => {
    setClick(false)
  }, [])

  return (
    <>
      <p>Home Page</p>
    </>
  )
}

export default Home
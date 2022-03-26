import React, { useEffect, useContext } from 'react'
import './SingleCryptid.scss'
import { NavigationContext } from '../Context/NavigationContext'

const SingleCryptid = () => {
  const { setClick } = useContext(NavigationContext)

  useEffect(() => {
    setClick(false)
  }, [])

  return (
    <p>Single Cryptid</p>
  )
}

export default SingleCryptid;
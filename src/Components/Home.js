import '../Styles/Home.scss'
import Card from './Card'
import React, { useContext, useEffect } from 'react'
import { NavigationContext } from '../Context/NavigationContext'
import { useQuery, gql } from "@apollo/client"

const GET_CRYPTIDS = gql`
    query GetCryptids {
     cryptids {
        name
        badatter
    }
  }
`;

// const useCryptids = () => {
//   const { data, loading, error } = useQuery(GET_CRYPTIDS)

//   return (
//     error, 
//     data,
//     loading
//   )
   
// }

const Home = () => {
  const { setClick } = useContext(NavigationContext)
  const { data, loading, error } = useQuery(GET_CRYPTIDS)
  console.log(error)


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

import React from 'react';
import { useQuery, gql } from '@apollo/client';
import ErrorModal from './ErrorModal'

const GET_CRYPTIDS = gql`
    query GetCryptids {
     getCryptids {
        name
        id
    }
  }
`

const DropDownButtons = ({ handleClick, resetData }) => {
  const { data, loading, error } = useQuery(GET_CRYPTIDS)

  if (loading) return null

  if (error) return <ErrorModal gqlError={error} />

  const dropDownButtons = data.getCryptids.map(cryptid => {
    return (
      <button
        key={cryptid.id}
        id={cryptid.name}
        className='dropdown-button'
        onClick={(event) => handleClick(event)}
      >
        {cryptid.name}
      </button>
    )
  })
  return (
    <div className='dropdown-container'>
      <button
        onClick={() => resetData()}
        className='dropdown-button'
      >
        All Cryptid Sightings
      </button>
      {dropDownButtons}
    </div>
  )
}

export default DropDownButtons


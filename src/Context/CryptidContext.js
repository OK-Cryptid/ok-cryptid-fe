import React, { useState } from 'react'

export const CryptidContext = React.createContext()

export const CryptidProvider = ({ children }) => {

  const [cryptid, setCryptid] = useState('')

  return (
    <CryptidContext.Provider value={{ cryptid, setCryptid }}>
      {children}
    </CryptidContext.Provider>
  )
}
import React, { useState } from 'react';

export const NavigationContext = React.createContext();

export const NavigationProvider = ({ children }) => {
  const [clicked, setClick] = useState(false);


  return (
    <NavigationContext.Provider value={{ clicked, setClick }}>
      {children}
    </NavigationContext.Provider>
  )
}
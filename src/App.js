import './App.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import SingleCryptid from './Components/SingleCryptid';
import AllSightings from './Components/AllSightings';
import SingleSighting from './Components/SingleSighting'
import NavBar from './Components/NavBar';
import ErrorModal from './Components/ErrorModal'
import { NavigationProvider } from './Context/NavigationContext';
import { ErrorProvider } from './Context/ErrorContext'

const App = () => {
  return (
    <ErrorProvider>
      <NavigationProvider>
        <NavBar />
        <ErrorModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singlecryptid/:name" element={<SingleCryptid />} />
          <Route path="/allsightings" element={<AllSightings />} />
          <Route path="/singlesighting/:name" element={<SingleSighting />}/>
        </Routes>
      </NavigationProvider>
    </ErrorProvider>
  );
}

export default App;

import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import SingleCryptid from './Components/SingleCryptid';
import AllSightings from './Components/AllSightings';
import NavBar from './Components/NavBar';
import { NavigationProvider } from './Context/NavigationContext';

const App = () => {
  return (
    <NavigationProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singlecryptid/:id" element={<SingleCryptid />} />
        <Route path="/allsightings" element={<AllSightings />} />
      </Routes>
    </NavigationProvider>
  );
}

export default App;

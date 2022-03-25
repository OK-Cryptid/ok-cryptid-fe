import React from 'react';
import "./NavBar.scss";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const NavBar = () => {
  return (
    <>
      <Link to={'/'}>
        <p>OK, CRYPTID</p>
        <img src={logo} alt='amazing sasquatch in the woods logo' className='logo' />
      </Link>
      <Link to={'/AllSightings'}>
        <button>SIGHTINGS</button>
      </Link>
    </>
  )
}

export default NavBar;
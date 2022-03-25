import React, { useContext } from 'react';
import "./NavBar.scss";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { NavigationContext } from '../Context/NavigationContext';


const NavBar = () => {
  const { setClick, clicked } = useContext(NavigationContext);
  return (
    <>
      <Link to={'/'}>
        <p>OK, CRYPTID</p>
        <img src={logo} alt='amazing sasquatch in the woods logo' className='logo' />
      </Link>
      {!clicked && <Link to={'/AllSightings'}>
        <button onClick={() => setClick(true)}>SIGHTINGS</button>
      </Link>}
    </>
  )
}

export default NavBar;
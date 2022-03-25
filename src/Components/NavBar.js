import React, { useContext } from 'react';
import "../Styles/NavBar.scss";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { NavigationContext } from '../Context/NavigationContext';


const NavBar = () => {
  const { setClick, clicked } = useContext(NavigationContext);
  return (
    <>
    <div className='nav-bar'>
      <Link className='logo-link' to={'/'}>
        <div className='logo-link-container'>
          <p className='logo-text' >OK, CRYPTID</p>
          <img src={logo} alt='amazing sasquatch in the woods logo' className='logo' />
        </div>
      </Link>
      {!clicked && <Link to={'/AllSightings'}>
        <button className='sightings-button' onClick={() => setClick(true)}>SIGHTINGS</button>
      </Link>}
    </div>
    <div className='gold-bottom-boarder'> </div>
    </>
  )
}

export default NavBar;

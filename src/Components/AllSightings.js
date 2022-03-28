import '../Styles/AllSightings.scss';
import SightingCard from './SightingCard';
import React, {useState} from 'react';
import bigfoot from '../assets/bigfoot.jpg';

const AllSightings = () => {
  const [ display, setDisplay ] = useState(false)

  const toggleDisplay = () => {
    setDisplay(!display)
  }


  return (
    <>
      <div className='sightings-header'>
        <h1 className='sightings-text'>Sightings</h1>
        <div className='search-container'>
          <div>
            <button
              className='cryptid-button'
              onClick={toggleDisplay}
            >
              Search by Cryptids
            </button>
            {display &&
              <div className='dropdown-container'>
                <p>things go here</p>
              </div>
            }
          </div>
          <form>
            <input
              className='zipcode-input'
              type="text"
              placeholder="Search by Zipcode"
            />
          </form>
        </div>
      </div>
      <div className='all-sightings-container'>
        <div>
          <p>fake card</p>
          <img src={bigfoot} alt='bigfoot' className='temp-photo' />
        </div>
        <div>
          <p>fake card</p>
          <img src={bigfoot} alt='bigfoot' className='temp-photo' />
        </div>
        <div>
          <p>fake card</p>
          <img src={bigfoot} alt='bigfoot' className='temp-photo' />
        </div>
        <div>
          <p>fake card</p>
          <img src={bigfoot} alt='bigfoot' className='temp-photo' />
        </div>
        <div>
          <p>fake card</p>
          <img src={bigfoot} alt='bigfoot' className='temp-photo' />
        </div>
        <div>
          <p>fake card</p>
          <img src={bigfoot} alt='bigfoot' className='temp-photo' />
        </div>
      </div>

    </>
  )
}

export default AllSightings;

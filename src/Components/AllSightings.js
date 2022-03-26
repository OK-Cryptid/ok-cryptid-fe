import '../Styles/AllSightings.scss';
import './Card';
import React, {useState} from 'react';
import bigfoot from '../assets/bigfoot.jpg';

const AllSightings = () => {
  const [ display, setDisplay ] = useState(false)

  const toggleDisplay = () => {
    setDisplay(!display)
  }


  return (
    <>
      <div className='search-container'>
        <div>
          <button
            className='cryptid-button'
            onClick={toggleDisplay}
          >
            Cryptids
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
            placeholder="zipcode"
          />
        </form>
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

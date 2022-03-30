import React from 'react';

import head from '../assets/head.svg'
import legOne from '../assets/leg-one.svg'
import legTwo from '../assets/leg-two.svg'
import '../Styles/NightCrawlers.scss'

const NightCrawlers = () => {

  return(
    <div className="walking-container">
      <div className='night-crawler'>
        <img className='head' src={head} alt='nightcrawler head'/>
        <img className='leg-one' src={legOne} alt='nightcrawler leg'/>
        <img className='leg-two' src={legTwo} alt='nightcrawler leg'/>
      </div>
    </div>
  )
}

export default NightCrawlers

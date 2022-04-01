import React from 'react'
import head from '../assets/head.svg'
import legOne from '../assets/leg-one.svg'
import legTwo from '../assets/leg-two.svg'
import littleHead from '../assets/little-head.svg'
import littleLegOne from '../assets/little-leg-one.svg'
import littleLegTwo from '../assets/little-leg-two.svg'
import '../Styles/NightCrawlers.scss'

const NightCrawlers = () => {

  return(
    <div className="crawlers-container">
      <div className="walking-container">
        <div className='night-crawler'>
          <img className='head' src={head} alt='nightcrawler head'/>
          <img className='leg-one' src={legOne} alt='nightcrawler leg'/>
          <img className='leg-two' src={legTwo} alt='nightcrawler leg'/>
        </div>
      </div>
      <div className="little-walking-container">
        <div className='little-night-crawler'>
          <img className='little-head' src={littleHead} alt='nightcrawler head'/>
          <img className='little-leg-one' src={littleLegOne} alt='nightcrawler leg'/>
          <img className='little-leg-two' src={littleLegTwo} alt='nightcrawler leg'/>
        </div>
      </div>
    </div>
  )
}

export default NightCrawlers

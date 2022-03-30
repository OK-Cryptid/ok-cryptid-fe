import React from 'react';

import body from '../assets/body.svg'
import rightLegBottom from '../assets/right-leg-bottom.svg'
import leftLegBottom from '../assets/left-leg-bottom.svg'
import one from '../assets/one.svg'
import two from '../assets/two.svg'
import three from '../assets/three.svg'
import four from '../assets/four.svg'
import five from '../assets/five.svg'
import six from '../assets/six.svg'
import seven from '../assets/seven.svg'
import eight from '../assets/eight.svg'
import nine from '../assets/nine.svg'
import ten from '../assets/ten.svg'
import eleven from '../assets/eleven.svg'
import thirteen from '../assets/thirteen.svg'
import fourteen from '../assets/fourteen.svg'
import fifteen from '../assets/fifteen.svg'
import nightCrawlers from '../assets/nightcrawlers.svg'
import '../Styles/NightCrawlers.scss'

const NightCrawlers = () => {

  return(
    <div className="walking-container">
      <div className='night-crawler-container'>
        <div className='head'></div>
        <div className='body'></div>
        <div className='legs'>
          <div className='leg-one'>
            <div className='one-top'></div>
            <div className='one-bottom'></div>
          </div>
          <div className='leg-two'>
            <div className='two-top'></div>
            <div className='two-bottom'></div>
          </div>
        </div>
      </div>
    </div>
  )
}


// <img className='one' src={one}/>
// <img className='two' src={two}/>
// <img className='three' src={three}/>
// <img className='four' src={four}/>
// <img className='five' src={five}/>
// <img className='six' src={six}/>
// <img className='seven' src={seven}/>
// <img className='eight' src={eight}/>
// <img className='nine' src={nine}/>
// <img className='ten' src={ten}/>
// <img className='eleven' src={eleven}/>
// <img className='thirteen' src={thirteen}/>
// <img className='fourteen' src={fourteen}/>
// <img className='fifteen' src={fifteen}/>

export default NightCrawlers

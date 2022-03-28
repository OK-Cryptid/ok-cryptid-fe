import React from 'react';
import leftPrint from '../assets/leftprint.svg'
import rightPrint from '../assets/rightprint.svg'
import '../Styles/FootPrints.scss'

const FootPrints = () => {

  return(
    <div class="foot-print-container">
      <img className='left-print-one' src={leftPrint}/>
      <img className='right-print-one' src={rightPrint}/>
      <img className='left-print-two' src={leftPrint}/>
      <img className='right-print-two' src={rightPrint}/>
      <img className='left-print-three' src={leftPrint}/>
      <img className='right-print-three' src={rightPrint}/>
      <img className='left-print-four' src={leftPrint}/>
      <img className='right-print-four' src={rightPrint}/>
      <img className='left-print-five' src={leftPrint}/>
      <img className='right-print-five' src={rightPrint}/>
    </div>
  )
}

export default FootPrints

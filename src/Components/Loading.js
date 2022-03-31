import React from 'react'
import '../Styles/Loading.scss'


const Loading = () => {

  return(
    <div className="loading">
      <div className='eyes-container'>
        <div className='left-eye'>
          <div className='left-pupil'></div>
        </div>
        <div className='right-eye'>
          <div className='right-pupil'></div>
        </div>
      </div>
      <p className='loading-text'>LOADING...</p>
    </div>
  )
}

export default Loading

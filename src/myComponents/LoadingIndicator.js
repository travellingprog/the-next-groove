/** A visual indicator that something is loading */
import React from 'react'

import smallLogo from 'myAssets/images/Logo-small-x100.png'
import './LoadingIndicator.css'

const LoadingIndicator = ({ showImage = true }) => (
  <div className='tng-LoadingIndicator'>
    { showImage &&
      <img className='tng-LoadingIndicator-img' src={smallLogo} alt='loading' />
    }
    <div className='tng-LoadingIndicator-text'>loading</div>
  </div>
)

export default LoadingIndicator

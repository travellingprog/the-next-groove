/** A visual indicator that an error has occured */
import React from 'react'

import skull from 'myAssets/images/skull-x100.png'
import './ErrorIndicator.css'

const ErrorIndicator = ({ children, showImage = true }) => (
  <div className='tng-ErrorIndicator'>
    { showImage &&
      <img className='tng-ErrorIndicator-img' src={skull} alt='Error' />
    }
    <div className='tng-ErrorIndicator-text'>
      {children}
    </div>
  </div>
)

export default ErrorIndicator

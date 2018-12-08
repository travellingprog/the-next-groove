import React from 'react'

import logoImg from 'myAssets/images/Logo-x45.png'
import './WideLogo.css'

const WideLogo = ({ className, containerHeight, logoWidth }) => (
  <div className={`tng-WideLogo ${className || ''}`} style={{ height: containerHeight }}>
    <a href='/'>
      <img
        alt='The Next Groove'
        className='tng-WideLogo-img'
        src={logoImg}
        style={{ width: logoWidth }}
      />
    </a>
  </div>
)

export default WideLogo

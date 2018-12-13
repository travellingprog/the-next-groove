/** This is the sticky bar that appears at the bottom of mobile pages */
import React from 'react'

import buttonImgSrc from './buttonImgSrc'

import smallLogo from 'myAssets/images/Logo-small-x35.png'
import './MobileStickyBar.css'

const MobileStickyBar = ({ actions, className }) => (
  <div className={`tng-MobileStickyBar u-mobileOnly ${className || ''}`}>
    <a href='/'>
      <img className='tng-MobileStickyBar-smallLogo' src={smallLogo} alt='return to home' />
    </a>
    <div className='tng-MobileStickyBar-actionBtns'>
      {actions.map(({ alt, className, img, onClick }, idx) =>
        <button className={`tng-MobileStickyBar-btn ${className || ''}`} key={idx} onClick={onClick}>
          <img
            alt={alt}
            className={`tng-MobileStickyBar-img tng-MobileStickyBar-img--${img}`}
            src={buttonImgSrc[img]}
          />
        </button>
      )}
    </div>
  </div>
)

export default MobileStickyBar

/** This is the sticky bar that appears at the bottom of mobile pages */
import React from 'react'

import fullScreenImg from 'myAssets/images/screen-full-32px-blue.png'
import menuImg from 'myAssets/images/th-menu-48px-blue.png'
import smallLogo from 'myAssets/images/Logo-small-x35.png'
import eyeImg from 'myAssets/images/eye-outline-48x-blue.png'
import './MobileStickyBar.css'

const imgSrc = {
  eye: eyeImg,
  fullScreen: fullScreenImg,
  menu: menuImg
}

const MobileStickyBar = ({ actions, className }) => (
  <div className={`tng-MobileStickyBar u-mobileOnly ${className || ''}`}>
    <a href='/'>
      <img className='tng-MobileStickyBar-smallLogo' src={smallLogo} alt='return to home' />
    </a>
    <div className='tng-MobileStickyBar-actionBtns'>
      {actions.map(({ alt, img, onClick }, idx) =>
        <button className='tng-MobileStickyBar-btn' key={idx} onClick={onClick}>
          <img
            alt={alt}
            className={`tng-MobileStickyBar-img tng-MobileStickyBar-img--${img}`}
            src={imgSrc[img]}
          />
        </button>
      )}
    </div>
  </div>
)

export default MobileStickyBar

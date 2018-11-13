/**
 * This is a bar that sticks to the bottom of the screen for mobile, and contains the
 * main action buttons for our page. This contains the Main and Button components,
 * which are meant to be imported together.
 */
import React from 'react'

import fullScreenImg from 'myAssets/images/screen-full-32px-blue.png'
import menuImg from 'myAssets/images/th-menu-48px-blue.png'
import smallLogo from 'myAssets/images/Logo-small-x35.png'
import eyeImg from 'myAssets/images/eye-outline-48x-blue.png'
import './StickyBar.css'

const imgSrc = {
  eye: eyeImg,
  fullScreen: fullScreenImg,
  menu: menuImg
}

/** The main component, that has our small logo and a container for buttons */
export const Main = ({ children, className }) => (
  <div className={`tng-StickyBar ${className}`}>
    <a href='/'>
      <img className='tng-StickyBar-smallLogo' src={smallLogo} alt='return to home' />
    </a>
    <div className='tng-StickyBar-stickyBtns'>
      {children}
    </div>
  </div>
)

/** A button that we want inside the sticky bar, with an onClick handler */
export const Button = ({ alt, img, onClick }) => (
  <button className='tng-StickyBar-btn' onClick={onClick}>
    <img
      alt={alt}
      className={`tng-StickyBar-img tng-StickyBar-img--${img}`}
      src={imgSrc[img]}
    />
  </button>
)

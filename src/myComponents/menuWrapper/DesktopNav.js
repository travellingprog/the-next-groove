/** A navigation that sticks to the top of the page, for desktop */
import React from 'react'

import WideLogo from 'myComponents/WideLogo'
import buttonImgSrc from './buttonImgSrc'
import { categories } from 'myUtils/constants'

import './DesktopNav.css'

const DesktopNav = ({ actions }) => (
  <header className='tng-DesktopNav u-desktopOnly'>
    <div className='tng-DesktopNav-content'>
      {/* Logo  */}
      <WideLogo className='tng-DesktopNav-logo' containerHeight='50px' logoWidth='250px' />

      {/* Navigation Links */}
      <nav className='tng-DesktopNav-nav'>
        <ul className='tng-DesktopNav-navList'>
          { categories.map(category =>
            <li key={category.key}>
              <a href={`/category/${category.path}`} className='tng-DesktopNav-navLink'>
                {category.namePlural}
              </a>
            </li>
          )}
          <li>
            <a href='/about' className='tng-DesktopNav-navLink'>About</a>
          </li>
        </ul>
      </nav>

      {/* Actions */}
      <div className='tng-DesktopNav-actionBtns'>
        {actions.map(({ alt, className, img, onClick }, idx) =>
          <button className={`tng-DesktopNav-btn ${className || ''}`} key={idx} onClick={onClick}>
            <img
              alt={alt}
              className={`tng-DesktopNav-img tng-DesktopNav-img--${img}`}
              src={buttonImgSrc[img]}
            />
          </button>
        )}
      </div>
    </div>
  </header>
)

export default DesktopNav

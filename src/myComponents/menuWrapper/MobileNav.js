/** A navigation menu that will slide in from the side on mobile */
import React from 'react'

import { categories } from 'myUtils/constants'
import sc from 'myUtils/suitClass'

import closeBtnImg from 'myAssets/images/times-outline-48px-blue.png'
import './MobileNav.css'

const MobileNav = ({ open, toggleOpen }) => (
  <div className={sc('tng-MobileNav', 'u-mobileOnly', open && 'is-visible')}>
    <nav className='tng-MobileNav-nav'>
      <ul className='tng-MobileNav-navList'>
        <li>
          <a className='tng-MobileNav-navItem tng-MobileNav-navItem--home' href='/'>Home</a>
        </li>
        { categories.map(category =>
          <li key={category.key}>
            <a className='tng-MobileNav-navItem' href={`/category/${category.path}`}>
              {category.namePlural}
            </a>
          </li>
        )}
        <li>
          <a className='tng-MobileNav-navItem tng-MobileNav-navItem--about' href='/about'>About</a>
        </li>
      </ul>
    </nav>
    <button className='tng-MobileNav-closeMenuBtn' onClick={toggleOpen}>
      <img alt='close menu' className='tng-MobileNav-closeBtnImg' src={closeBtnImg} />
    </button>
  </div>
)

export default MobileNav

/** A menu that will slide in from the side on mobile */
import React from 'react'

import sc from 'myUtils/suitClass'

import closeBtnImg from 'myAssets/images/times-outline-48px-blue.png'
import './DeprecatedMenu.css'

const DeprecatedMenu = ({ open, toggleMenu }) => (
  <div className={sc('tng-DeprecatedMenu', open && 'is-visible')}>
    <nav className='tng-DeprecatedMenu-nav'>
      <ul className='tng-DeprecatedMenu-navList'>
        <li>
          <a className='tng-DeprecatedMenu-navItem tng-DeprecatedMenu-navItem--seperate' href='/'>Home</a>
        </li>
        <li><a className='tng-DeprecatedMenu-navItem' href='/category/musings'>Musings</a></li>
        <li><a className='tng-DeprecatedMenu-navItem' href='/category/mixes'>Showcase Mixes</a></li>
        <li>
          <a className='tng-DeprecatedMenu-navItem tng-DeprecatedMenu-navItem--seperate' href='/category/playlists'>
            Playlists
          </a>
        </li>
        <li><a className='tng-DeprecatedMenu-navItem' href='/about'>About</a></li>
      </ul>
    </nav>
    <button className='tng-DeprecatedMenu-closeMenuBtn' onClick={toggleMenu}>
      <img alt='close menu' className='tng-DeprecatedMenu-closeBtnImg' src={closeBtnImg} />
    </button>
  </div>
)

/** Return a CSS class that will shift an item when the menu slides in */
export const getMenuAnimClass = (isOpen) => sc('tng-DeprecatedMenu-neighbor', isOpen && 'is-shifted')

export default DeprecatedMenu

/** A menu that will slide in from the side on mobile */
import React from 'react'

import sc from 'myUtils/suitClass'

import closeBtnImg from 'myAssets/images/times-outline-48px-blue.png'
import './Menu.css'

const Menu = ({ open, toggleMenu }) => (
  <div className={sc('tng-Menu', open && 'is-visible')}>
    <nav className='tng-Menu-nav'>
      <ul className='tng-Menu-navList'>
        <li>
          <a className='tng-Menu-navItem tng-Menu-navItem--seperate' href='/'>Home</a>
        </li>
        <li><a className='tng-Menu-navItem' href='/category/musings'>Musings</a></li>
        <li><a className='tng-Menu-navItem' href='/category/mixes'>Showcase Mixes</a></li>
        <li>
          <a className='tng-Menu-navItem tng-Menu-navItem--seperate' href='/category/playlists'>
            Playlists
          </a>
        </li>
        <li><a className='tng-Menu-navItem' href='#'>About</a></li>
      </ul>
    </nav>
    <button className='tng-Menu-closeMenuBtn' onClick={toggleMenu}>
      <img alt='close menu' className='tng-Menu-closeBtnImg' src={closeBtnImg} />
    </button>
  </div>
)

/** Return a CSS class that will shift an item when the menu slides in */
export const getMenuAnimClass = (isOpen) => sc('tng-Menu-neighbor', isOpen && 'is-shifted')

export default Menu

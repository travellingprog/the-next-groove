/** The navigation that appears on our home pages, for desktop screen width */
import React from 'react'

import { categories } from 'myUtils/constants'

import './HomeDesktopNav.css'

const HomeDesktopNav = () => (
  <nav className='tng-HomeDesktopNav u-desktopOnly'>
    <ul className='tng-HomeDesktopNav-list'>
      { categories.map(category =>
        <li key={category.key}>
          <a href={`/category/${category.path}`} className='tng-HomeDesktopNav-link'>
            {category.namePlural}
          </a>
        </li>
      )}
      <li>
        <a href='/about' className='tng-HomeDesktopNav-link'>About</a>
      </li>
    </ul>
  </nav>
)

export default HomeDesktopNav

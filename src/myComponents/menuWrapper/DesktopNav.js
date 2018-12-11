/** A navigation that sticks to the top of the page, for desktop */
import React from 'react'

import WideLogo from 'myComponents/WideLogo'

import './DesktopNav.css'

const DesktopNav = ({ actions }) => (
  <header className='tng-DesktopNav u-desktopOnly'>
    <div className='tng-DesktopNav-content'>
      <WideLogo className='tng-DesktopNav-logo' containerHeight='60px' logoWidth='250px' />
    </div>
  </header>
)

export default DesktopNav

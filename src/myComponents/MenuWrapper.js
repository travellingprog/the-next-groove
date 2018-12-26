/**
  * A menu component to be used across all pages, which will contain site navigation as well as
  * actions that can be done on the page.
  *
  * For mobile, the navigation will slide in and the actions will appear in a sticky
  * bar at the bottom of the page.
  *
  * For desktop, a sticky bar will be at the top, with both navigation and action items.
  */
import React, { Component } from 'react'

import DesktopNav from './menuWrapper/DesktopNav'
import MobileNav from './menuWrapper/MobileNav'
import MobileStickyBar from './menuWrapper/MobileStickyBar'
import sc from 'myUtils/suitClass'

import './MenuWrapper.css'

class MenuWrapper extends Component {
  state = {
    mobileNavOpen: false
  }

  /** Change whether the mobile nav menu is open or closed */
  toggleMobileNav = () => {
    this.setState({ mobileNavOpen: !this.state.mobileNavOpen })
  }

  render () {
    const { actions = [], mobileOnly = false, render, ...otherProps } = this.props
    const { mobileNavOpen } = this.state

    const mobileActions = [
      ...actions,
      { alt: 'toggle menu', img: 'menu', onClick: this.toggleMobileNav }
    ]

    const navSlideClass = sc('tng-MenuWrapper-neighbor', mobileNavOpen && 'is-shifted')

    return (
      <div className={sc('tng-MenuWrapper', mobileOnly && '--mobileOnly')}>
        <MobileStickyBar actions={mobileActions} className={navSlideClass} />
        <MobileNav open={mobileNavOpen} toggleOpen={this.toggleMobileNav} />

        {!mobileOnly &&
          <DesktopNav actions={actions} />
        }

        {render({ navSlideClass, ...otherProps })}
      </div>
    )
  }
}

export default MenuWrapper

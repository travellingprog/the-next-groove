/** The About page, explaining the site */
import React, { Component } from 'react'
import { Titled } from 'react-titled'

import CMSItemLoader from 'myComponents/CMSItemLoader'
import MarkdownRenderer from 'myComponents/MarkdownRenderer'
import Menu, { getMenuAnimClass } from 'myComponents/Menu'
import WideLogo from 'myComponents/WideLogo'
import * as StickyBar from 'myComponents/StickyBar'

import './About.css'

class About extends Component {
  state = {
    menuOpen: false
  }

  /** Change whether the menu is open or closed */
  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render () {
    const { previewData } = this.props
    const { menuOpen } = this.state
    const menuAnimClass = getMenuAnimClass(menuOpen)

    return (
      <div className='tng-About'>
        { /* Tab Title */ }
        <Titled title={title => `About | ${title}`} />

        { /* Sticky Bar */ }
        <StickyBar.Main className={menuAnimClass}>
          <StickyBar.Button img='menu' onClick={this.toggleMenu} alt='toggle menu' />
        </StickyBar.Main>

        { /* Menu */ }
        <Menu open={menuOpen} toggleMenu={this.toggleMenu} />

        { /* Top Logo */ }
        <WideLogo className={menuAnimClass} containerHeight='60px' logoWidth='250px' />

        { /* Main Content */ }
        <section className={`tng-About-content ${menuAnimClass}`}>
          <CMSItemLoader
            itemPath='pages/about.json'
            previewData={previewData}
            renderOnData={data =>
              <div>
                <div
                  className='tng-About-mainImage'
                  style={{ backgroundImage: `url(${data.mainImage})` }}
                />
                <div className='tng-About-title'>About</div>
                <main className='tng-About-text'>
                  <MarkdownRenderer md={data.body || ''} />
                </main>
              </div>
            }
          />
        </section>
      </div>
    )
  }
}

export default About

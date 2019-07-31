/** The About page, explaining the site */
import React from 'react'
import { Titled } from 'react-titled'

import CMSItemLoader from 'myComponents/CMSItemLoader'
import MarkdownRenderer from 'myComponents/MarkdownRenderer'
import MenuWrapper from 'myComponents/MenuWrapper'
import WideLogo from 'myComponents/WideLogo'

import './About.css'

/**
 * Render all content wrapped by menus/navigation.
 * navSlideClass is a CSS that will make content slide when the mobile nav slides in.
 */
const About = ({ navSlideClass, previewData }) => (
  <div className={`tng-About ${navSlideClass}`}>
    { /* Tab Title */ }
    <Titled title={title => `About | ${title}`} />

    { /* Top Logo */ }
    <WideLogo className='u-mobileOnly' containerHeight='60px' logoWidth='250px' />

    { /* Main Content */ }
    <section className='tng-About-content'>
      <CMSItemLoader
        description='page text'
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

/** A wrapper around page content with the menus/navigation */
const AboutWrapper = (props) => (
  <MenuWrapper render={About} {...props} />
)

export default AboutWrapper

/** The home page of our site */
import React from 'react'
import { Titled } from 'react-titled'

import ArticlesList from 'myComponents/ArticlesList'
import CMSItemLoader from 'myComponents/CMSItemLoader'
import HomeDesktopNav from './home/HomeDesktopNav'
import MenuWrapper from 'myComponents/MenuWrapper'
import PageLinks from 'myComponents/PageLinks'
import WideLogo from 'myComponents/WideLogo'

import './Home.css'

/**
 * Render all content wrapped by menus/navigation.
 * navSlideClass is a CSS that will make content slide when the mobile nav slides in.
 */
const Home = ({ navSlideClass, match }) => {
  const pageNum = match.params.pageNum || '1'

  return (
    <div className={`tng-Home ${navSlideClass}`}>
      { /* Tab Title */ }
      {pageNum !== '1' &&
        <Titled title={title => `page ${pageNum} | ${title}`} />
      }

      { /* Top Logo */ }
      <WideLogo className='u-mobileOnly' containerHeight='75px' logoWidth='300px' />
      <WideLogo className='u-desktopOnly' containerHeight='75px' logoWidth='400px' />

      { /* Navigation for Desktop Screen Width */ }
      <HomeDesktopNav />

      { /* Page Number */ }
      {pageNum !== '1' &&
        <div className='tng-Home-pageNum'>page {pageNum}</div>
      }

      {/* Page Articles */}
      <CMSItemLoader
        description='articles list'
        itemPath={`generated/home/${pageNum}.json`}
        renderOnData={({ pageArticles, links }) =>
          <div>
            { /* Articles List */ }
            <ArticlesList articles={pageArticles} />

            {/* Links To Other Pages */}
            <PageLinks links={links} />
          </div>
        }
      />
    </div>
  )
}

/** A wrapper around page content with the menus/navigation */
const HomeWrapper = (props) => (
  <MenuWrapper mobileOnly render={Home} {...props} />
)

export default HomeWrapper

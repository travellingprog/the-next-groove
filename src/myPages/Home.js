/** The home page of our site */
import React, { Component } from 'react'

import ArticleHeader from 'myComponents/ArticleHeader'
import CMSItemLoader from 'myComponents/CMSItemLoader'
import Menu, { getMenuAnimClass } from 'myComponents/Menu'
import * as StickyBar from 'myComponents/StickyBar'
import { categoryTexts } from 'myUtils/constants'

import logoImg from 'myAssets/images/Logo-x45.png'
import './Home.css'

class Home extends Component {
  state = {
    menuOpen: false
  }

  /** Change whether the menu is open or closed */
  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render () {
    const pageNum = this.props.match.params.pageNum || '1'
    const { menuOpen } = this.state
    const menuAnimClass = getMenuAnimClass(menuOpen)

    return (
      <div className='tng-Home'>
        { /* Sticky Bar */ }
        <StickyBar.Main className={menuAnimClass}>
          <StickyBar.Button img='menu' onClick={this.toggleMenu} alt='toggle menu' />
        </StickyBar.Main>

        { /* Menu */ }
        <Menu open={menuOpen} toggleMenu={this.toggleMenu} />

        { /* Top Logo */ }
        <div className={`tng-Home-logoContainer ${menuAnimClass}`}>
          <img alt='The Next Groove' className='tng-Home-logo' src={logoImg} />
        </div>

        {/* Page Articles */}
        <CMSItemLoader
          itemPath={`generated/home/${pageNum}.json`}
          renderOnData={({ pageArticles, links }) =>
            <div className={`tng-Home-pageArticles ${menuAnimClass}`}>
              {pageArticles.map((article, idx) =>
                <div className='tng-Home-item' key={idx}>
                  <ArticleHeader image={article.mainImage} title={article.title} link={article.urlPath}>
                    <div>
                      <span className='tng-Home-category'>{categoryTexts[article.category]}</span>
                      <span className='tng-Home-date'>/ {article.publicationDate}</span>
                    </div>
                  </ArticleHeader>
                  <div className='tng-Home-articleSummary'>{article.summary}</div>
                </div>
              )}
              <div className='tng-Home-links'>
                {links.previousPage
                  ? <a className='tng-Home-pageLink' href={links.previousPage}>Previous Page</a>
                  : <div />
                }
                {links.nextPage
                  ? <a className='tng-Home-pageLink' href={links.nextPage}>Next Page</a>
                  : <div />
                }
              </div>
            </div>
          }
        />
      </div>
    )
  }
}

export default Home

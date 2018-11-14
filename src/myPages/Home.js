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

        {/* Latest Articles */}
        <CMSItemLoader
          itemPath={`generated/homePage.json`}
          renderOnData={data =>
            <div className={`tng-Home-latestArticles ${menuAnimClass}`}>
              {data.latestArticles.map((article, idx) =>
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
            </div>
          }
        />
      </div>
    )
  }
}

export default Home

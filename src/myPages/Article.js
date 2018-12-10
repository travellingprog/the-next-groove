/**
 * This is the page that is displayed when viewing an article
 */
import React, { Component } from 'react'
import fscreen from 'fscreen'

import ArticleContent from './article/ArticleContent'
import CMSItemLoader from 'myComponents/CMSItemLoader'
import LinkToArticles from './article/LinkToArticles'
import DeprecatedMenu, { getMenuAnimClass } from 'myComponents/DeprecatedMenu'
import * as StickyBar from 'myComponents/StickyBar'
import sc from 'myUtils/suitClass'

import './Article.css'

class Article extends Component {
  contentRef = React.createRef()

  state = {
    menuOpen: false,
    musicOnly: false,
    selectorOpen: false
  }

  /** Request to open the article in fullscreen */
  requestFullscreen = () => {
    const contentElem = this.contentRef.current
    if (fscreen.fullscreenEnabled) {
      fscreen.requestFullscreen(contentElem)
    }
  }

  /** Set whether Music Only mode is on, to change what content is displayed */
  setMusicOnly (musicOnly) {
    this.setState({ musicOnly, selectorOpen: false })
  }

  /** Change whether the menu is open or closed */
  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  /** Change whether the selector is open or closed */
  toggleSelector = () => {
    this.setState({ selectorOpen: !this.state.selectorOpen })
  }

  render () {
    let articlePath = ''
    const { match: routeMatch, previewData } = this.props
    if (!previewData) {
      articlePath = routeMatch.params.articlePath
    }

    const { menuOpen, musicOnly, selectorOpen } = this.state
    const menuAnimClass = getMenuAnimClass(menuOpen)

    return (
      <div className='tng-Article'>
        { /* Sticky Bar */ }
        <StickyBar.Main className={`tng-Article-stickyBar ${menuAnimClass}`}>
          { fscreen.fullscreenEnabled &&
            <StickyBar.Button img='fullScreen' onClick={this.requestFullscreen} alt='full screen' />
          }
          <StickyBar.Button img='eye' onClick={this.toggleSelector} alt='toggle view mode' />
          <StickyBar.Button img='menu' onClick={this.toggleMenu} alt='toggle menu' />
        </StickyBar.Main>

        { /* Menu */ }
        <DeprecatedMenu open={menuOpen} toggleMenu={this.toggleMenu} />

        { /* "Music Only" Indicator */ }
        <div className={sc('tng-Article-indicator', musicOnly && 'is-visible', menuAnimClass)}>
          music only
        </div>

        { /* Article Content */ }
        <div
          className={sc('tng-Article-content', musicOnly && 'is-musicOnly', menuAnimClass)}
          ref={this.contentRef}>
          <CMSItemLoader
            itemPath={`articles/${articlePath}.json`}
            previewData={previewData && previewData.article}
            renderOnData={data =>
              <ArticleContent data={data} musicOnly={musicOnly} />
            }
          />
        </div>

        { /* Links To Other Articles */ }
        <div className={`tng-Article-linksToArticles ${menuAnimClass}`}>
          <CMSItemLoader
            itemPath={`generated/article-related/${articlePath}.json`}
            previewData={previewData && previewData.articleRelated}
            renderOnData={data =>
              <LinkToArticles data={data} />
            }
          />
        </div>

        { /* View Selector */ }
        <div className={sc('tng-Article-viewSelector', selectorOpen && ' is-visible')}>
          <div>
            <div className='tng-Article-selectorTitle'>select view mode</div>
            <div>
              <button
                className={sc('tng-Article-viewMode', !musicOnly && 'is-selected')}
                onClick={() => this.setMusicOnly(false)}
              >
                Text + Music
              </button>
            </div>
            <div>
              <button
                className={sc('tng-Article-viewMode', musicOnly && 'is-selected')}
                onClick={() => this.setMusicOnly(true)}
              >
                Music only
              </button>
            </div>
            <div>
              <button className='tng-Article-closeSelectorBtn' onClick={this.toggleSelector}>
                <strong>x close</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Article

import React, { Component } from 'react'
import fscreen from 'fscreen'

import ArticleContent from './article/ArticleContent'
import CMSItemLoader from 'myComponents/CMSItemLoader'
import sc from 'myUtils/suitClass'

import closeBtnImg from 'myAssets/images/times-outline-48px-blue.png'
import fullScreenImg from 'myAssets/images/screen-full-32px-blue.png'
import menuImg from 'myAssets/images/th-menu-48px-blue.png'
import smallLogo from 'myAssets/images/Logo-small-x35.png'
import viewImg from 'myAssets/images/eye-outline-48x-blue.png'
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

    return (
      <div className='tng-Article'>

        { /* Sticky Bar */ }
        <div className={sc('tng-Article-stickyBar', menuOpen && 'is-shifted')}>
          <img className='tng-Article-smallLogo' src={smallLogo} alt='' />
          <div className='tng-Article-stickyBtns'>
            { fscreen.fullscreenEnabled &&
              <button className='tng-Article-stickyBtn' onClick={this.requestFullscreen}>
                <img alt='' className='tng-Article-fullScreenImg' src={fullScreenImg} />
              </button>
            }
            <button className='tng-Article-stickyBtn' onClick={this.toggleSelector}>
              <img alt='' className='tng-Article-viewImg' src={viewImg} />
            </button>
            <button className='tng-Article-stickyBtn' onClick={this.toggleMenu}>
              <img alt='' className='tng-Article-menuImg' src={menuImg} />
            </button>
          </div>
        </div>

        { /* Menu */ }
        <div className={sc('tng-Article-menu', menuOpen && 'is-visible')}>
          <nav className='tng-Article-nav'>
            <ul className='tng-Article-navList'>
              <li>
                <a className='tng-Article-navItem tng-Article-navItem--seperate' href='#'>Home</a>
              </li>
              <li><a className='tng-Article-navItem' href='#'>Musings</a></li>
              <li><a className='tng-Article-navItem' href='#'>Showcase Mixes</a></li>
              <li>
                <a className='tng-Article-navItem tng-Article-navItem--seperate' href='#'>
                  Playlists
                </a>
              </li>
              <li><a className='tng-Article-navItem' href='#'>About</a></li>
            </ul>
          </nav>
          <button className='tng-Article-closeMenuBtn' onClick={this.toggleMenu}>
            <img alt='' className='tng-Article-closeBtnImg' src={closeBtnImg} />
          </button>
        </div>

        { /* "Music Only" Indicator */ }
        <div
          className={sc(
            'tng-Article-indicator', musicOnly && 'is-visible', menuOpen && 'is-shifted'
          )}
        >
          music only
        </div>

        { /* Article Content */ }
        <div
          className={sc(
            'tng-Article-content', menuOpen && ' is-shifted', musicOnly && 'is-musicOnly'
          )}
          ref={this.contentRef}>
          <CMSItemLoader
            itemPath={`articles/${articlePath}.json`}
            previewData={previewData}
            renderOnData={data =>
              <ArticleContent data={data} musicOnly={musicOnly} />
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

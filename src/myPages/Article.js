/**
 * This is the page that is displayed when viewing an article
 */
import React, { Component } from 'react'
import fscreen from 'fscreen'

import ArticleContent from './article/ArticleContent'
import CMSItemLoader from 'myComponents/CMSItemLoader'
import LinkToArticles from './article/LinkToArticles'
import MenuWrapper from 'myComponents/MenuWrapper'
import ViewSelector from './article/ViewSelector'
import sc from 'myUtils/suitClass'

import './Article.css'

class Article extends Component {
  actions = null

  contentRef = React.createRef()

  state = {
    musicOnly: false,
    selectorOpen: false
  }

  /** Return the actions that can be done on the article page */
  getActions () {
    const actions = []
    if (fscreen.fullscreenEnabled) {
      actions.push({
        alt: 'full screen',
        className: 'u-mobileOnly',
        img: 'fullScreen',
        onClick: this.requestFullscreen
      })
    }

    actions.push({ alt: 'toggle view mode', img: 'eye', onClick: this.toggleSelector })
    return actions
  }

  /** Request to open the article in fullscreen */
  requestFullscreen = () => {
    const contentElem = this.contentRef.current
    if (fscreen.fullscreenEnabled) {
      fscreen.requestFullscreen(contentElem)
    }
  }

  /** Set whether Music Only mode is on, to change what content is displayed */
  setMusicOnly = (musicOnly) => {
    this.setState({ musicOnly, selectorOpen: false })
  }

  /** Change whether the selector is open or closed */
  toggleSelector = () => {
    this.setState({ selectorOpen: !this.state.selectorOpen })
  }

  /**
   * Render all content wrapped by menus/navigation.
   * navSlideClass is a CSS that will make content slide when the mobile nav slides in.
   */
  renderMain = ({ navSlideClass }) => {
    const { match: routeMatch, previewData } = this.props
    const { musicOnly, selectorOpen } = this.state

    let articlePath = ''
    if (!previewData) {
      articlePath = routeMatch.params.articlePath
    }

    return (
      <div className={sc('tng-Article', navSlideClass)} ref={this.contentRef}>
        { /* "Music Only" Indicator */ }
        <div className={sc('tng-Article-indicator', musicOnly && 'is-visible', navSlideClass)}>
          music only
        </div>

        { /* Article Content */ }
        <div className={sc('tng-Article-content', musicOnly && 'is-musicOnly')}>
          <CMSItemLoader
            description='article content'
            itemPath={`articles/${articlePath}.json`}
            previewData={previewData && previewData.article}
            renderOnData={data =>
              <ArticleContent data={data} musicOnly={musicOnly} />
            }
          />
        </div>

        { /* Links To Other Articles */ }
        <div className='tng-Article-linksToArticles'>
          <CMSItemLoader
            description='links to other articles'
            itemPath={`generated/article-related/${articlePath}.json`}
            previewData={previewData && previewData.articleRelated}
            renderOnData={data =>
              <LinkToArticles data={data} />
            }
            required={false}
          />
        </div>

        { /* View Selector */ }
        <ViewSelector
          musicOnly={musicOnly}
          open={selectorOpen}
          setMusicOnly={this.setMusicOnly}
          toggleSelector={this.toggleSelector}
        />
      </div>
    )
  }

  render () {
    this.actions = this.actions || this.getActions()
    return <MenuWrapper actions={this.actions} render={this.renderMain} />
  }
}

export default Article

import React, { Component } from 'react'
import './admin/setup'
import CMS, { init } from 'netlify-cms'

import Article from './Article'
import EditorEmbeddedMusic from './admin/EditorEmbeddedMusic'
import EditorSpecialText from './admin/EditorSpecialText'
import LimitedText from './admin/LimitedText'
import PreviewContainer from './admin/PreviewContainer'
import config from './admin/config'

CMS.init = init

class Admin extends Component {
  componentDidMount () {
    CMS.init({ config })

    CMS.registerEditorComponent(EditorEmbeddedMusic)
    CMS.registerEditorComponent(EditorSpecialText)

    CMS.registerWidget('text160Limit', LimitedText(160))

    CMS.registerPreviewTemplate('articles', ({ entry, getAsset }) => {
      const article = entry.toJS().data
      article.mainImage = article.mainImage && getAsset(article.mainImage).toString()

      const articleRelated = {
        nextArticle: { title: 'A History Of Drum Machines', urlPath: '/no-content' },
        previousArticle: { title: 'A Map Of Electronic Scenes', urlPath: '/no-content' }
      }

      return (
        <PreviewContainer>
          <Article previewData={{ article, articleRelated }} />
        </PreviewContainer>
      )
    })
  }

  render () {
    return (
      <div id='nc-root' />
    )
  }
}

export default Admin

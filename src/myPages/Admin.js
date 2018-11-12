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
      const previewData = entry.toJS().data
      previewData.mainImage = previewData.mainImage && getAsset(previewData.mainImage).toString()

      return (
        <PreviewContainer>
          <Article previewData={previewData} />
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

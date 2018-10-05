import React, { Component } from 'react'
import './admin/setup'
import CMS, { init } from 'netlify-cms'

import Article from './Article'
import EditorSpecialText from './admin/EditorSpecialText'
import PreviewContainer from './admin/PreviewContainer'
import config from './admin/config'

CMS.init = init

class Admin extends Component {
  componentDidMount () {
    CMS.init({ config })

    CMS.registerPreviewTemplate('articles', ({ entry, getAsset }) => {
      const previewData = entry.toJS().data
      previewData.mainImage = previewData.mainImage && getAsset(previewData.mainImage).toString()

      return (
        <PreviewContainer>
          <Article previewData={previewData} />
        </PreviewContainer>
      )
    })

    CMS.registerEditorComponent(EditorSpecialText)
  }

  render () {
    return (
      <div id='nc-root' />
    )
  }
}

export default Admin

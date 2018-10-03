import React, { Component } from 'react'
import './admin/setup'
import CMS, { init } from 'netlify-cms'

import Article from './Article'
import PreviewContainer from './admin/PreviewContainer'
import config from './admin/config'

CMS.init = init

class Admin extends Component {
  componentDidMount () {
    CMS.init({ config })
    CMS.registerPreviewTemplate('articles', ({ entry }) =>
      <PreviewContainer>
        <Article previewData={entry.toJS().data} />
      </PreviewContainer>
    )
  }

  render () {
    return (
      <div id='nc-root' />
    )
  }
}

export default Admin

/** Admin loads NetlifyCMS and sets custom widgets and templates for the CMS */
import React, { Component } from 'react'
import { Titled } from 'react-titled'
import './admin/setup'
import CMS, { init } from 'netlify-cms'

import AboutPreview from './admin/AboutPreview'
import ArticlePreview from './admin/ArticlePreview'
import EditorEmbeddedMusic from './admin/EditorEmbeddedMusic'
import EditorSpecialText from './admin/EditorSpecialText'
import EditorTracklist from './admin/EditorTracklist'
import LimitedText from './admin/LimitedText'
import config from './admin/config'

CMS.init = init

class Admin extends Component {
  componentDidMount () {
    CMS.init({ config })

    CMS.registerEditorComponent(EditorEmbeddedMusic)
    CMS.registerEditorComponent(EditorSpecialText)
    CMS.registerEditorComponent(EditorTracklist)

    CMS.registerWidget('text160Limit', LimitedText(160))

    CMS.registerPreviewTemplate('about', AboutPreview)
    CMS.registerPreviewTemplate('articles', ArticlePreview)
  }

  render () {
    return (
      <Titled title={title => `Admin | ${title}`}>
        <div id='nc-root' />
      </Titled>
    )
  }
}

export default Admin

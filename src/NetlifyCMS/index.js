import React, { Component } from 'react'
import './setup'
import CMS, { init } from 'netlify-cms'
import 'netlify-cms/dist/cms.css'
import config from './config'

CMS.init = init

class NetlifyCMS extends Component {
  componentDidMount () {
    CMS.init({ config })
  }

  render () {
    return (
      <div id='nc-root' />
    )
  }
}

export default NetlifyCMS

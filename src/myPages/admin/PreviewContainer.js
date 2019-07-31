import React, { Component } from 'react'

class PreviewContainer extends Component {
  componentDidMount () {
    // When running the app with Webpack Dev Server, this code copies the embedded CSS
    // into the iframe showing the Preview
    // It is based on stackoverflow answer: https://stackoverflow.com/a/4613196/2051913
    if (window.parent) {
      let previewIframe

      for (const iframe of document.querySelectorAll('iframe')) {
        const hasPreview = !!iframe.contentDocument.querySelector('.tng-PreviewContainer')
        if (hasPreview) {
          previewIframe = iframe
          break
        }
      }

      if (previewIframe) {
        const previewPaneHead = previewIframe.contentDocument.head
        const stylesheets = window.parent.document.querySelectorAll('style, link[rel="stylesheet"]')

        for (const stylesheet of stylesheets) {
          previewPaneHead.appendChild(stylesheet.cloneNode(true))
        }
      }
    }
  }

  render () {
    return (
      <div className='tng-PreviewContainer'>
        { this.props.children }
      </div>
    )
  }
}

export default PreviewContainer

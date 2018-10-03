import React, { Component } from 'react'

class PreviewContainer extends Component {
  componentDidMount () {
    // When running the app with Webpack Dev Server, this code copies the embedded CSS
    // into the iframe showing the Preview
    // It is based on stackoverflow answer: https://stackoverflow.com/a/4613196/2051913
    if (window.parent) {
      let previewIframe
      const arrStyleSheets = window.parent.document.getElementsByTagName('style')

      for (let iframe of document.querySelectorAll('iframe')) {
        let hasPreview = !!iframe.contentDocument.querySelector('.tng-PreviewContainer')
        if (hasPreview) {
          previewIframe = iframe
          break
        }
      }

      if (previewIframe) {
        const previewPaneHead = previewIframe.contentDocument.head

        for (let i = 0; i < arrStyleSheets.length; i++) {
          let clone = arrStyleSheets[i].cloneNode(true)
          previewPaneHead.appendChild(clone)
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

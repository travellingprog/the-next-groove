import React, { Component } from 'react'

import sc from 'myUtils/suitClass'
import './EmbeddedMusic.css'

class EmbeddedMusic extends Component {
  iframeWrapperRef = React.createRef()

  state = {
    aspectPercentage: ''
  }

  componentDidMount () {
    this.saveAspectRatio()
  }

  componentDidUpdate (prevProps) {
    if (this.props.iframe !== prevProps.iframe) {
      this.saveAspectRatio()
    }
  }

  /**
   * Get the aspect percentages of all provided iframes, unless they have a dimension that is not
   * defined in pixels (e.g. Soundcloud iframe code sets width as 100%). These aspect percentages
   * can be used to make the iframe responsive
   */
  saveAspectRatio () {
    let aspectPercentage = ''
    let iframe = this.iframeWrapperRef.current.children[0]
    if (iframe && iframe.width && iframe.height) {
      let isPixelNumbers = /^\d+$/.test(`${iframe.width}${iframe.height}`)
      if (isPixelNumbers) {
        aspectPercentage = `${iframe.height * 100 / iframe.width}%`
      }
    }

    this.setState({ aspectPercentage })
  }

  render () {
    const { aspectPercentage } = this.state
    const { extraClass, showTitle, trackNumber, title, iframe  } = this.props

    return (
      <div className={`tng-EmbeddedMusic ${extraClass}`}>
        <div className={sc('tng-EmbeddedMusic-title', showTitle && 'is-visible')}>
          {trackNumber}. {title}
        </div>
        <div className={aspectPercentage ? 'tng-EmbeddedMusic-fluidFrameWrapper' : ''}
          ref={this.iframeWrapperRef}
          style={aspectPercentage ? { paddingBottom: aspectPercentage } : {}}>
          { iframe }
        </div>
      </div>
    )
  }
}

export default EmbeddedMusic

/**
 * This is a component that renders a iframe, that should have music, within our Markdown content.
 * It will have a track number that will only show up with Music Only mode active.
 */
import React, { Component } from 'react'

import './EmbeddedMusic.css'

class EmbeddedMusic extends Component {
  iframeWrapperRef = React.createRef()

  state = {
    aspectPercentage: '',
    trackNumber: ''
  }

  componentDidMount () {
    this.saveAspectRatio()
    this.setState({ trackNumber: this.props.getTrackNumber() })
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
    const iframe = this.iframeWrapperRef.current.children[0]
    if (iframe && iframe.width && iframe.height) {
      const isPixelNumbers = /^\d+$/.test(`${iframe.width}${iframe.height}`)
      if (isPixelNumbers) {
        aspectPercentage = `${iframe.height * 100 / iframe.width}%`
      }
    }

    this.setState({ aspectPercentage })
  }

  render () {
    const { aspectPercentage, trackNumber } = this.state
    const { extraClass, showTrackNumber, title, iframe } = this.props

    return (
      <div className={`tng-EmbeddedMusic ${extraClass}`}>
        <div className='tng-EmbeddedMusic-title'>
          {showTrackNumber &&
            <span>{trackNumber}. </span>
          }
          {title}
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

/**
 * This is a block that represents an article. It has the main image of the article,
 * as well as the title. It can also hold other elements within it, and can have a link to the
 * article itself.
 */

import React, { Component } from 'react'

import OptionalLinkWrapper from './OptionalLinkWrapper'
import './ArticleHeader.css'

class ArticleHeader extends Component {
  state = {
    bgShift: 0
  }

  componentDidMount () {
    this.setBackgroundImagesShift()
  }

  /**
   * check the aspect ratio of the image, to figure out how much to shift the adjacent
   * background images, which creates a cool effect
   */
  setBackgroundImagesShift = () => {
    const component = this
    const img = new window.Image()

    img.onload = function () {
      const containerAspectRatio = 1.5
      const imageAspectRatio = this.width / this.height

      if (imageAspectRatio < containerAspectRatio) {
        component.setState({ bgShift: imageAspectRatio * 100 / containerAspectRatio })
      }
    }

    img.src = this.props.image
  }

  render () {
    const { children, image, title, link } = this.props
    const { bgShift } = this.state

    const bgLStyle = { backgroundImage: `url(${image})` }
    const bgRStyle = { ...bgLStyle }
    if (bgShift) {
      bgLStyle.transform = `translate3d(-${bgShift}%, 0, 0)`
      bgRStyle.transform = `translate3d(${bgShift}%, 0, 0)`
    }

    return (
      <div className='tng-ArticleHeader'>
        <OptionalLinkWrapper link={link}>
          <div className='tng-ArticleHeader-imgContainer'>
            <div className='tng-ArticleHeader-imgContainerInner'>
              <div className='tng-ArticleHeader-imgBackground' style={bgLStyle} />
              <div
                className='tng-ArticleHeader-imgBackground tng-ArticleHeader-imgBackground--right'
                style={bgRStyle}
              />
              <img alt='' className='tng-ArticleHeader-image' src={image} />
            </div>
          </div>
        </OptionalLinkWrapper>
        <div className='tng-ArticleHeader-titleBox'>
          <div>
            <OptionalLinkWrapper link={link}>
              <span className='tng-ArticleHeader-title'>{title}</span>
            </OptionalLinkWrapper>
          </div>
          { children }
        </div>
      </div>
    )
  }
}

export default ArticleHeader

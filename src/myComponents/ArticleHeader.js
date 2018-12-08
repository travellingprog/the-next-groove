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
    window.addEventListener('resize', this.setBackgroundImagesShift);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.setBackgroundImagesShift);
  }

  /**
   * check the dimensions of the image, to figure out how much to shift the adjacent
   * background images, which creates a cool effect
   */
  setBackgroundImagesShift = () => {
    const component = this
    const img = new window.Image()

    img.onload = function () {
      // according to our CSS, the image height will be 66.66vw or 520px, whichever is smaller
      const renderedHeight = Math.min(Math.abs(0.6666 * window.innerWidth), 520)

      // We need to shift our background image by half of the image's rendered width
      const renderedWidth = this.width * (renderedHeight / this.height)
      component.setState({ bgShift: renderedWidth * 0.5 })
    }

    img.src = this.props.image
  }

  render () {
    const { children, image, title, link } = this.props
    const { bgShift } = this.state

    let bgLStyle = { backgroundImage: `url(${image})` }
    let bgRStyle = { ...bgLStyle }
    if (bgShift) {
      bgLStyle.transform = `translate3d(-${bgShift}px, 0, 0)`
      bgRStyle.transform = `translate3d(${bgShift}px, 0, 0)`
    }

    return (
      <div className='tng-ArticleHeader'>
        <OptionalLinkWrapper link={link}>
          <div className='tng-ArticleHeader-imgContainer'>
            <div className='tng-ArticleHeader-imgBackground' style={bgLStyle} />
            <div
              className='tng-ArticleHeader-imgBackground tng-ArticleHeader-imgBackground--right'
              style={bgRStyle}
            />
            <img alt='' className='tng-ArticleHeader-image' src={image} />
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

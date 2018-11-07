/** TODO add description */

import React, { Component } from 'react'

import './ArticleHeader.css'

class ArticleHeader extends Component {
  state = {
    bgShift: 0
  }

  componentDidMount () {
    this.setBackgroundImagesShift()
  }

  /**
   * check the dimensions of the image, to figure out how much to shift the adjacent
   * background images, which creates a cool effect
   */
  setBackgroundImagesShift () {
    const component = this
    const img = new window.Image()

    img.onload = function () {
      // We need to shift our background image by half of the image's width, in vw units.
      // We can calculate that amount by knowing the image's height is 66.66vw
      component.setState({ bgShift: (66.66 / this.height) * this.width * 0.5 })
    }

    img.src = this.props.image
  }

  render () {
    const { children, image, title } = this.props
    const { bgShift } = this.state

    let bgLStyle = { backgroundImage: `url(${image})` }
    let bgRStyle = { ...bgLStyle }
    if (bgShift) {
      bgLStyle.transform = `translate3d(-${bgShift}vw, 0, 0)`
      bgRStyle.transform = `translate3d(${bgShift}vw, 0, 0)`
    }

    return (
      <div className='tng-ArticleHeader'>
        <div className='tng-ArticleHeader-imgContainer'>
          <div className='tng-ArticleHeader-imgBackground' style={bgLStyle} />
          <div
            className='tng-ArticleHeader-imgBackground tng-ArticleHeader-imgBackground--right'
            style={bgRStyle}
          />
          <img alt='' className='tng-ArticleHeader-image' src={image} />
        </div>
        <div className='tng-ArticleHeader-titleBox'>
          <div className='tng-ArticleHeader-title'>{title}</div>
          { children }
        </div>
      </div>
    )
  }
}

export default ArticleHeader

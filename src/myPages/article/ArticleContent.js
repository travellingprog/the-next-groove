import React, { Component } from 'react'

import MarkdownRenderer from 'myComponents/MarkdownRenderer'
import logoImg from 'myAssets/images/Logo-x45.png'
import './ArticleContent.css'

const categoryTexts = {
  MUSINGS: 'Musing',
  MIXES: 'Showcase Mix',
  PLAYLISTS: 'Playlist'
}

class ArticleContent extends Component {
  state = {
    bgShift: 0
  }

  componentDidMount () {
    this.setBackgroundImagesShift()
  }

  /**
   * check the dimension of the article's main image, to figure out how much to shift the adjacent
   * background images, which creates a cool effect
   */
  setBackgroundImagesShift () {
    const component = this
    const img = new window.Image()

    img.onload = function () {
      // We need to shift our background image by half of the main image's width, in vw units.
      // We can calculate that amount by knowing the main image's height is 66.66vw
      component.setState({ bgShift: (66.66 / this.height) * this.width * 0.5 })
    }

    img.src = this.props.data.mainImage
  }

  render () {
    const { publicationDate, title, mainImage, category, body } = this.props.data
    const { bgShift } = this.state

    let bgLStyle = { backgroundImage: `url(${mainImage})` }
    let bgRStyle = { ...bgLStyle }
    if (bgShift) {
      bgLStyle.transform = `translate3d(-${bgShift}vw, 0, 0)`
      bgRStyle.transform = `translate3d(${bgShift}vw, 0, 0)`
    }

    return (
      <div>
        <div className='tng-ArticleContent-logoContainer'>
          <img alt='' className='tng-ArticleContent-logo' src={logoImg} />
        </div>
        <div className='tng-ArticleContent-imageContainer'>
          <div className='tng-ArticleContent-imageBackground' style={bgLStyle} />
          <div
            className='tng-ArticleContent-imageBackground tng-ArticleContent-imageBackground--right'
            style={bgRStyle}
          />
          <img alt='' className='tng-ArticleContent-image' src={mainImage} />
        </div>
        <div className='tng-ArticleContent-titleBox'>
          <div className='tng-ArticleContent-title'>{title}</div>
          <div className='tng-ArticleContent-category'>{categoryTexts[category]}</div>
          <div className='tng-ArticleContent-publishDate'>published on {publicationDate}</div>
        </div>
        <div className='tng-ArticleContent-text'>
          <MarkdownRenderer md={body || ''} />
        </div>
      </div>
    )
  }
}

export default ArticleContent

/** This renders the actual content of our article, into the Article page */
import React from 'react'

import ArticleHeader from 'myComponents/ArticleHeader'
import MarkdownRenderer from 'myComponents/MarkdownRenderer'
import logoImg from 'myAssets/images/Logo-x45.png'
import { categoryTexts } from 'myUtils/constants'
import './ArticleContent.css'

const ArticleContent = ({ data, musicOnly }) => {
  const { publicationDate, title, mainImage, category, body } = data

  return (
    <div>
      <div className='tng-ArticleContent-logoContainer'>
        <img alt='The Next Groove' className='tng-ArticleContent-logo' src={logoImg} />
      </div>
      <ArticleHeader image={mainImage} title={title}>
        <div className='tng-ArticleContent-category'>{categoryTexts[category]}</div>
        <div className='tng-ArticleContent-publishDate'>published on {publicationDate}</div>
      </ArticleHeader>
      <div className='tng-ArticleContent-text'>
        <MarkdownRenderer md={body || ''} musicOnly={musicOnly} />
      </div>
    </div>
  )
}

export default ArticleContent

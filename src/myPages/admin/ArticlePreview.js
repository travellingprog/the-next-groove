/** ArticlePreview is a custom NetlifyCMS preview template to show the Article page */
import React from 'react'

import Article from 'myPages/Article'
import PreviewContainer from './PreviewContainer'

const ArticlePreview = ({ entry, getAsset }) => {
  const article = entry.toJS().data
  article.mainImage = article.mainImage && getAsset(article.mainImage).toString()

  const articleRelated = {
    nextArticle: { title: 'A History Of Drum Machines', urlPath: '/no-content' },
    previousArticle: { title: 'A Map Of Electronic Scenes', urlPath: '/no-content' }
  }

  return (
    <PreviewContainer>
      <Article previewData={{ article, articleRelated }} />
    </PreviewContainer>
  )
}

export default ArticlePreview

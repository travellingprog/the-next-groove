/** This renders the actual content of our article, into the Article page */
import React from 'react'
import { Titled } from 'react-titled'

import ArticleHeader from 'myComponents/ArticleHeader'
import MarkdownRenderer from 'myComponents/MarkdownRenderer'
import WideLogo from 'myComponents/WideLogo'
import { categoryBy } from 'myUtils/constants'
import './ArticleContent.css'

const ArticleContent = ({ data, musicOnly }) => {
  const { publicationDate, title, mainImage, category: categoryKey, body } = data
  const category = categoryKey && categoryBy('key', categoryKey)

  return (
    <div>
      <Titled title={tabTitle => `${title} | ${tabTitle}`} />

      <WideLogo className='u-mobileOnly' containerHeight='55px' logoWidth='280px' />

      <ArticleHeader image={mainImage} title={title}>
        <div>
          {category &&
            <a className='tng-ArticleContent-category' href={`/category/${category.path}`}>
              {category.name}
            </a>
          }
        </div>
        <div className='tng-ArticleContent-publishDate'>published on {publicationDate}</div>
      </ArticleHeader>

      <div className='tng-ArticleContent-text'>
        <MarkdownRenderer md={body || ''} musicOnly={musicOnly} />
      </div>
    </div>
  )
}

export default ArticleContent

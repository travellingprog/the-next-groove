/** The section in the Article page that has links to neighboring articles */
import React from 'react'

import './LinkToArticles.css'

const LinkToArticles = ({ data }) => (
  <div className='tng-LinkToArticles'>
    {data.nextArticle &&
      <div className='tng-LinkToArticles-section'>
        <div className='tng-LinkToArticles-label'>next post</div>
        <div>
          <a className='tng-LinkToArticles-link' href={data.nextArticle.urlPath}>
            {data.nextArticle.title}
          </a>
        </div>
      </div>
    }
    {data.previousArticle &&
      <div className='tng-LinkToArticles-section'>
        <div className='tng-LinkToArticles-label'>previous post</div>
        <div>
          <a className='tng-LinkToArticles-link' href={data.previousArticle.urlPath}>
            {data.previousArticle.title}
          </a>
        </div>
      </div>
    }
  </div>
)

export default LinkToArticles

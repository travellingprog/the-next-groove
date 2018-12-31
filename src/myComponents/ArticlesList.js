import React from 'react'

import ArticleHeader from 'myComponents/ArticleHeader'
import { categoryBy } from 'myUtils/constants'

import './ArticlesList.css'

/**
 * Render a list of articles as the main content of a page
 */
const ArticlesList = ({ articles, showCategory = true }) => (
  <div className='tng-ArticlesList'>
    {articles.map((article, idx) =>
      <div className='tng-ArticlesList-item' key={idx}>
        <ArticleHeader image={article.mainImage} title={article.title} link={article.urlPath}>
          <div>
            { showCategory &&
              <React.Fragment>
                <a
                  className='tng-ArticlesList-category'
                  href={`/category/${categoryBy('key', article.category).path}`}>
                  {categoryBy('key', article.category).name}
                </a>
                <span className='tng-ArticlesList-separator'>/</span>
              </React.Fragment>
            }
            <span className='tng-ArticlesList-date'>{article.publicationDate}</span>
          </div>
        </ArticleHeader>
        <div className='tng-ArticlesList-articleSummary'>{article.summary}</div>
      </div>
    )}
  </div>
)

export default ArticlesList

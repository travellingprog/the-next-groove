/** A category page for our site */
import React from 'react'
import { Titled } from 'react-titled'

import ArticleHeader from 'myComponents/ArticleHeader'
import CMSItemLoader from 'myComponents/CMSItemLoader'
import MenuWrapper from 'myComponents/MenuWrapper'
import PageLinks from 'myComponents/PageLinks'
import WideLogo from 'myComponents/WideLogo'
import { categoryBy } from 'myUtils/constants'

import './Category.css'

/**
 * Render all content wrapped by menus/navigation.
 * navSlideClass is a CSS that will make content slide when the mobile nav slides in.
 */
const Category = ({ navSlideClass, match }) => {
  const { category: categoryPath } = match.params
  const pageNum = match.params.pageNum || '1'
  const categoryTitle = categoryBy('path', categoryPath).namePlural

  return (
    <div className={`tng-Category ${navSlideClass}`}>
      { /* Tab Title */ }
      <Titled
        title={title =>
          (pageNum !== '1' ? `${pageNum} | ` : '') + `${categoryTitle} | ${title}`
        }
      />

      { /* Top Logo */ }
      <WideLogo className='u-mobileOnly' containerHeight='60px' logoWidth='250px' />

      { /* Category Title */ }
      <div className='tng-Category-title'>
        {categoryTitle}
      </div>

      {/* Page Articles */}
      <CMSItemLoader
        itemPath={`generated/category/${categoryPath}/${pageNum}.json`}
        renderOnData={({ pageArticles, links }) =>
          <div className='tng-Category-pageArticles'>
            {pageArticles.map((article, idx) =>
              <div className='tng-Category-item' key={idx}>
                <ArticleHeader image={article.mainImage} title={article.title} link={article.urlPath}>
                  <div>
                    <span className='tng-Category-date'>{article.publicationDate}</span>
                  </div>
                </ArticleHeader>
                <div className='tng-Category-articleSummary'>{article.summary}</div>
              </div>
            )}
            <PageLinks links={links} />
          </div>
        }
      />
    </div>
  )
}

/** A wrapper around page content with the menus/navigation */
const CategoryWrapper = ({ match }) => (
  <MenuWrapper actions={[]} render={Category} match={match} />
)

export default CategoryWrapper

/** The home page of our site */
import React from 'react'

import ArticleHeader from 'myComponents/ArticleHeader'
import CMSItemLoader from 'myComponents/CMSItemLoader'
import * as StickyBar from 'myComponents/StickyBar'
import { categoryTexts } from 'myUtils/constants'

import logoImg from 'myAssets/images/Logo-x45.png'
import './Home.css'

const Home = () => (
  <div className='tng-Home'>
    <StickyBar.Main>
      <StickyBar.Button
        img='menu'
        onClick={() => { console.log('menu toggled') }}
        alt='toggle menu'
      />
    </StickyBar.Main>

    <div className='tng-Home-logoContainer'>
      <img alt='The Next Groove' className='tng-Home-logo' src={logoImg} />
    </div>

    <CMSItemLoader
      itemPath={`generated/homePage.json`}
      renderOnData={data =>
        <div className='tng-Home-latestArticles'>
          {data.latestArticles.map((article, idx) =>
            <div className='tng-Home-item' key={idx}>
              <ArticleHeader image={article.mainImage} title={article.title} link={article.urlPath}>
                <div>
                  <span className='tng-Home-category'>{categoryTexts[article.category]}</span>
                  <span className='tng-Home-date'>/ {article.publicationDate}</span>
                </div>
              </ArticleHeader>
              <div className='tng-Home-articleSummary'>{article.summary}</div>
            </div>
          )}
        </div>
      }
    />
  </div>
)

export default Home

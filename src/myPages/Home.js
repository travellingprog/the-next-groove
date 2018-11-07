/** TODO add description */

import React from 'react'

import CMSItemLoader from 'myComponents/CMSItemLoader'
import ArticleHeader from 'myComponents/ArticleHeader'
import logoImg from 'myAssets/images/Logo-x45.png'

import './Home.css'

const Home = () => (
  <div className='tng-Home'>
    <div className='tng-Home-logoContainer'>
      <img alt='The Next Groove' className='tng-Home-logo' src={logoImg} />
    </div>
    <CMSItemLoader
      itemPath={`generated/homePage.json`}
      renderOnData={data =>
        <div>
          {data.latestArticles.map((article, idx) =>
            <div key={idx}>
              <ArticleHeader image={article.mainImage} title={article.title} />
              <pre>{JSON.stringify(article, null, 2)}</pre>
            </div>
          )}
        </div>
      }
    />
  </div>
)

export default Home

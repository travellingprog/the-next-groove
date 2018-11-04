import React from 'react'

import CMSItemLoader from 'myComponents/CMSItemLoader'

import './Home.css'

const Home = () => (
  <div className='tng-Home'>
    <CMSItemLoader
      itemPath={`generated/homePage.json`}
      renderOnData={data =>
        <div>
          {data.latestArticles.map((article, idx) =>
            <pre key={idx}>{JSON.stringify(article, null, 2)}</pre>
          )}
        </div>
      }
    />
  </div>
)

export default Home

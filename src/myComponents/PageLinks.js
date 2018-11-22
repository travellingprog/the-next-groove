import React from 'react'

import './PageLinks.css'

const PageLinks = ({ links }) => (
  <div className='tng-PageLinks'>
    {links.previousPage
      ? <a className='tng-PageLinks-link' href={links.previousPage}>Previous Page</a>
      : <div />
    }
    {links.nextPage
      ? <a className='tng-PageLinks-link' href={links.nextPage}>Next Page</a>
      : <div />
    }
  </div>
)

export default PageLinks

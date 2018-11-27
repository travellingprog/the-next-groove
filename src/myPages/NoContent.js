import React from 'react'
import { Titled } from 'react-titled'

import './NoContent.css'

const NoContent = () => (
  <div className='tng-NoContent'>
    <Titled title={title => `no content | ${title}`} />
    No Content!
  </div>
)

export default NoContent

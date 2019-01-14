/** The component we display when we do not have a route match for the URL */
import React from 'react'
import { Titled } from 'react-titled'

import ErrorIndicator from 'myComponents/ErrorIndicator'
import WideLogo from 'myComponents/WideLogo'
import './NotFound.css'

const NotFound = () => (
  <div className='tng-NotFound'>
    <Titled title={title => `No Page Found | ${title}`} />
    <div className='tng-NotFound-background' />
    <div className='tng-NotFound-msgContainer'>
      <WideLogo className='u-mobileOnly' containerHeight='30px' logoWidth='180px' />
      <WideLogo className='u-desktopOnly' containerHeight='50px' logoWidth='300px' />
      <ErrorIndicator>
        <div>
          <strong>Are you a lost soul?</strong>
          <div>We couldn&#39;t find any page for you.</div>
        </div>
      </ErrorIndicator>
      <a className='tng-NotFound-link' href='/'>start over</a>
    </div>
  </div>
)

export default NotFound

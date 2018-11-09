/**
 * A component that will wrap its children with an <a> element if a link is provided,
 * otherwise it will wrap them with a React.Fragment.
 */
import React from 'react'

import './OptionalLinkWrapper.css'

const OptionalLinkWrapper = ({ children, link }) => (
  link
    ? <a className='tng-OptionalLinkWrapper-link' href={link}>{ children }</a>
    : <React.Fragment>{ children }</React.Fragment>
)

export default OptionalLinkWrapper

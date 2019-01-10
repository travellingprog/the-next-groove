/** A component to render an image that was provided in the Markdown of our article content */
import React from 'react'

import './MarkdownImage.css'

// Note: top-level element cannot be a div, because images are wrapped with <p> elements
const MarkdownImage = ({ alt, src, title }) => (
  <img alt={alt} className='tng-MarkdownImage' src={src} title={title} />
)

export default MarkdownImage

import React from 'react'

import './MarkdownImage.css'

const MarkdownImage = ({ alt, src }) => (
  <div className='tng-MarkdownImage'>
    <img alt={alt} className='tng-MarkdownImage-img' src={src} />
  </div>
)

export default MarkdownImage

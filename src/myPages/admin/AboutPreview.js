/** AboutPreview is a custom NetlifyCMS preview template to show the About page */
import React from 'react'

import About from 'myPages/About'
import PreviewContainer from './PreviewContainer'

const AboutPreview = ({ entry, getAsset }) => {
  const previewData = entry.toJS().data
  previewData.mainImage = previewData.mainImage && getAsset(previewData.mainImage).toString()

  return (
    <PreviewContainer>
      <About previewData={previewData} />
    </PreviewContainer>
  )
}

export default AboutPreview

import React from 'react'

const EmbeddedMusic = ({ title, iframe }) => {
  console.log('title', title)
  console.log('iframe', iframe)
  console.log('typeof iframe', typeof iframe)
  if (iframe) {
    iframe = iframe.replace(/&#96;/g, '`').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  }

  return (
    <div>
      <div>{ title }</div>
      <div dangerouslySetInnerHTML={{ __html: iframe }} />
    </div>
  )
}

export default EmbeddedMusic

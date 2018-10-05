import Markdown from 'markdown-to-jsx'
import React from 'react'

import AlignContent from './markdownRenderer/AlignContent'

const MarkdownRenderer = ({ md }) => (
  <Markdown
    children={md}
    options={{
      overrides: {
        AlignContent
      }
    }}
  />
)

export default MarkdownRenderer

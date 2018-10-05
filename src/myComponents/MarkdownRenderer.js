import Markdown from 'markdown-to-jsx'
import React from 'react'

import EmbeddedMusic from './markdownRenderer/EmbeddedMusic'
import SpecialText from './markdownRenderer/SpecialText'

const MarkdownRenderer = ({ md }) => (
  <Markdown
    children={md}
    options={{
      overrides: {
        EmbeddedMusic,
        SpecialText
      }
    }}
  />
)

export default MarkdownRenderer

import Markdown from 'markdown-to-jsx'
import React from 'react'

import SpecialText from './markdownRenderer/SpecialText'

const MarkdownRenderer = ({ md }) => (
  <Markdown
    children={md}
    options={{
      overrides: {
        SpecialText
      }
    }}
  />
)

export default MarkdownRenderer

import Markdown from 'markdown-to-jsx'
import React from 'react'

import EmbeddedMusic from './markdownRenderer/EmbeddedMusic'
import SpecialText from './markdownRenderer/SpecialText'
import sc from 'myUtils/suitClass'
import './MarkdownRenderer.css'

const MarkdownRenderer = ({ md, musicOnly = false }) => {
  let trackNumber = 1

  return (
    <Markdown
      className={sc('tng-MarkdownRenderer', musicOnly && 'is-showingMusicOnly')}
      children={md}
      options={{
        overrides: {
          EmbeddedMusic: (propsInMarkdown) => (
            <EmbeddedMusic
              extraClass='tng-MarkdownRenderer-music'
              showTitle={musicOnly}
              trackNumber={trackNumber++}
              {...propsInMarkdown}
            />
          ),
          SpecialText
        }
      }}
    />
  )
}

export default MarkdownRenderer

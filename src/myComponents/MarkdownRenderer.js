import Markdown from 'markdown-to-jsx'
import React from 'react'

import EmbeddedMusic from './markdownRenderer/EmbeddedMusic'
import MarkdownImage from './markdownRenderer/MarkdownImage'
import SpecialText from './markdownRenderer/SpecialText'
import Tracklist from './markdownRenderer/Tracklist'
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
          EmbeddedMusic: {
            component: EmbeddedMusic,
            props: {
              extraClass: 'tng-MarkdownRenderer-music',
              getTrackNumber: () => trackNumber++,
              showTrackNumber: musicOnly
            }
          },
          SpecialText,
          Tracklist,
          img: {
            component: MarkdownImage
          }
        }
      }}
    />
  )
}

export default MarkdownRenderer

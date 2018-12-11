/** Render an opaque view that allows you to change the view mode of the article */
import React from 'react'

import sc from 'myUtils/suitClass'

import './ViewSelector.css'

const ViewSelector = ({ musicOnly, open, setMusicOnly, toggleSelector }) => (
  <div className={sc('tng-ViewSelector', open && ' is-visible')}>
    <div>
      <div className='tng-ViewSelector-title'>select view mode</div>
      <div>
        <button
          className={sc('tng-ViewSelector-viewMode', !musicOnly && 'is-selected')}
          onClick={() => setMusicOnly(false)}
        >
          Text + Music
        </button>
      </div>
      <div>
        <button
          className={sc('tng-ViewSelector-viewMode', musicOnly && 'is-selected')}
          onClick={() => setMusicOnly(true)}
        >
          Music only
        </button>
      </div>
      <div>
        <button className='tng-ViewSelector-closeBtn' onClick={toggleSelector}>
          <strong>x close</strong>
        </button>
      </div>
    </div>
  </div>
)

export default ViewSelector

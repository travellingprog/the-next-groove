/**
 * Tracklist is a component that renders the tracklist of a music mix.
 */
import React from 'react'

import './Tracklist.css'

const Tracklist = ({ tracksStr }) => {
  const tracks = tracksStr ? JSON.parse(tracksStr) : []

  return (
    <section className='tng-Tracklist'>
      <h2 className='tng-Tracklist-title'>Tracklist</h2>
      <ul className='tng-Tracklist-list'>
        {tracks.map(({ startTime, artist, trackName }, i) =>
          <li className='tng-Tracklist-item' key={i}>
            <div className='tng-Tracklist-time'>{formatTime(startTime)} </div>
            <div>
              <div className='tng-Tracklist-artist'>{artist}</div>
              <div className='tng-Tracklist-name'>{trackName}</div>
            </div>
          </li>
        )}
      </ul>
    </section>
  )
}

/** formatTime will format the track time so it has a mm:ss or hh:mm:ss display */
function formatTime (startTime) {
  const trimmedTime = startTime.trim()

  if (trimmedTime.length === 0) {
    return '00:00'
  }

  const timeFormat = /^[0-5]?[0-9]:[0-5][0-9](:[0-5][0-9])?$/
  if (!trimmedTime.match(timeFormat)) {
    return '??:??'
  }

  if (trimmedTime.length === 4 || trimmedTime.length === 7) {
    // trimmedTime is m:ss or h:mm:ss
    return `0${trimmedTime}`
  }

  return trimmedTime
}

export default Tracklist

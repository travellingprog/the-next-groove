/**
 * EditorTrackList is a NetlifyCMS editor component for the admin user to add
 * a tracklist inside of a page.
 */
import { List, fromJS } from 'immutable'

// set default object to never have values set to undefined
const defaultTrackValues = {
  startTime: '',
  artist: '',
  trackName: ''
}

export default {
  id: 'tracklist',
  label: 'Tracklist',
  fields: [
    {
      name: 'tracks',
      label: 'Tracks',
      widget: 'list',
      fields: [
        {
          name: 'startTime',
          label: 'Start Time',
          widget: 'string',
          default: '00:00:00',
          pattern: [
            '^[0-5]?[0-9]:[0-5][0-9](:[0-5][0-9])?$',
            'Enter a time in the format hh:mm:ss or mm:ss'
          ]
        },
        {
          name: 'artist',
          label: 'Artist',
          widget: 'string'
        },
        {
          name: 'trackName',
          label: 'Track Name',
          widget: 'string'
        }
      ]
    }
  ],
  pattern: /^<Tracklist\stracksStr={(.*)}\s\/>/,
  fromBlock: regexMatch => {
    let tracks = []
    if (regexMatch[1]) {
      tracks = fromJS(JSON.parse(regexMatch[1]))
    }

    return { tracks }
  },
  toBlock: ({ tracks = [] }) => {
    if (List.isList(tracks)) {
      tracks = tracks.toJS()
    }

    const tracksWithDefaults = tracks.map(track => ({ ...defaultTrackValues, ...track }))
    const tracksStr = JSON.stringify(tracksWithDefaults)
    return `<Tracklist tracksStr={${tracksStr}} />`
  },
  toPreview: () => `<div></div>` // will be overriden by MarkdownRenderer
}

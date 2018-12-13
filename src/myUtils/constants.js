/** An array of all site categories */
export const categories = [
  {
    key: 'MUSINGS',
    name: 'Musing',
    namePlural: 'Musings',
    path: 'musings'
  },
  {
    key: 'MIXES',
    name: 'Showcase Mix',
    namePlural: 'Showcase Mixes',
    path: 'mixes'
  },
  {
    key: 'PLAYLISTS',
    name: 'Playlist',
    namePlural: 'Playlists',
    path: 'playlists'
  }
]

/** A function to return a category object by a certain key */
export function categoryBy (field, value) {
  return categories.find(category => category[field] === value)
}

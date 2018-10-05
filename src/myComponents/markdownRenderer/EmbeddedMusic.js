import React from 'react'

const EmbeddedMusic = ({ title, iframe }) => (
  <div>
    <div>{title}</div>
    {iframe}
  </div>
)

export default EmbeddedMusic

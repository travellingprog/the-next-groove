import React from 'react'

import './AlignContent.css'

const AlignContent = ({ align }) => (
  <div className={`tng-AlignContent tng-AlignContent--${align.toLowerCase()}`} />
)

export default AlignContent

import React from 'react'

import sc from 'myUtils/suitClass'
import './SpecialText.css'

const SpecialText = ({ align, size }) => (
  <div
    className={sc(
      'tng-SpecialText',
      align && `tng-SpecialText--${align.toLowerCase()}`,
      size && `tng-SpecialText--${size.toLowerCase()}`
    )}
  />
)

export default SpecialText

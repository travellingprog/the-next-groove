import React from 'react'

import './SpecialText.css'

const SpecialText = ({ align, size }) => (
  <div
    className={
      'tng-SpecialText ' +
      (align ? `tng-SpecialText--${align.toLowerCase()} ` : '') +
      (size ? `tng-SpecialText--${size.toLowerCase()} ` : '')
    }
  />
)

export default SpecialText

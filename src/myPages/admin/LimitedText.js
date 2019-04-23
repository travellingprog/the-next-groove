/**
 * LimitedText is just a copy of a slightly altered version of the standard NetlifyCMS
 * Text widget, except it strictly imposes a character limit, and most importantly it
 * displays how many characters you've written so far.
 */
import React, { Component } from 'react'
import NetlifyCmsWidgetText from 'netlify-cms-widget-text'

import './LimitedText.css'

const NetlifyTextWidget = NetlifyCmsWidgetText.controlComponent

const LimitedText = (limitNum) => {
  // This needs to return a React component class, not just a stateless component.
  // Otherwise, the NetlifyCMS wrappers will fail.
  return class extends Component {
    render () {
      const { onChange, value = '', ...otherProps } = this.props
      const alteredValue = value.slice(0, limitNum)

      return (
        <div className='tng-LimitedText'>
          <NetlifyTextWidget
            onChange={value => {
              onChange(value.slice(0, limitNum))
            }}
            value={alteredValue}
            {...otherProps}
          />
          <div className='tng-LimitedText-indicator'>
            ({alteredValue.length}/{limitNum})
          </div>
        </div>
      )
    }
  }
}

export default LimitedText

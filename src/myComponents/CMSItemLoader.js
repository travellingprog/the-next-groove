import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

const basePath = (process.env.NODE_ENV === 'production') ? '/cms-content' : '/cms-dev-content'

class CMSItemLoader extends Component {
  state = {
    data: null,
    errorOnLoad: false
  }

  async componentDidMount () {
    try {
      if (!this.props.previewData) {
        const response = await fetch(`${basePath}/${this.props.itemPath}`)
        if (!response.ok) {
          throw new Error(`Unable to retrieve content (${response.status})`)
        }

        const data = await response.json()
        this.setState({ data })
      }
    } catch (err) {
      console.error(`error fetching item ${this.props.itemPath}`, err)
      this.setState({ errorOnLoad: true })
    }
  }

  render () {
    if (this.state.errorOnLoad) {
      return <Redirect to='/no-content' />
    }

    const data = this.props.previewData || this.state.data

    if (!data) {
      return null
    } else {
      return this.props.renderOnData(data)
    }
  }
}

export default CMSItemLoader

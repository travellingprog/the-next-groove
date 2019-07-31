/**
 * Fetch a file that was created through our CMS and pass the data within to a "renderOnData"
 * function (which should be given as a prop)
 * However, for the sake of the Preview view within the CMS, you can also provide a previewData
 * object prop, which will be used as the data source instead.
 */
import React, { Component } from 'react'

import ErrorIndicator from './ErrorIndicator'
import LoadingIndicator from './LoadingIndicator'

const basePath = (process.env.NODE_ENV === 'production') ? '/cms-content' : '/cms-dev-content'

class CMSItemLoader extends Component {
  state = {
    fetchedData: null,
    loading: false,
    errorOnLoad: null
  }

  componentDidMount () {
    const { itemPath, previewData } = this.props
    if (!previewData) {
      this.fetchFile(itemPath)
    }
  }

  /** Load the CMS file at (basePath + itemPath), save the JSON content in component state */
  async fetchFile (itemPath) {
    try {
      let response = null

      // wait 400ms before showing a loading indicator
      setTimeout(() => {
        if (!response && !this.state.errorOnLoad) {
          this.setState({ loading: true })
        }
      }, 400)

      const fullPath = `${basePath}/${itemPath}`
      response = await fetch(fullPath)

      if (!response.ok) {
        const err = new Error(`Unable to retrieve content (${fullPath})`)
        err.statusCode = response.status
        throw err
      }

      const fetchedData = await response.json()
      this.setState({ fetchedData, loading: false })
    } catch (err) {
      console.error(err.message, err.statusCode)
      this.setState({ errorOnLoad: err, loading: false })
    }
  }

  /** When an error occurs, show the correct error message (and possibly redirect) */
  renderError (errorOnLoad, required, description) {
    if (errorOnLoad.statusCode === 404) {
      return (
        <ErrorIndicator showImage={required}>
          Could not find<br />
          {description}
        </ErrorIndicator>
      )
    } else {
      return (
        <ErrorIndicator showImage={required}>
          Sorry, something went wrong loading<br />
          {description}
        </ErrorIndicator>
      )
    }
  }

  render () {
    const { description, previewData, renderOnData, required } = this.props
    const { errorOnLoad, fetchedData, loading } = this.state
    const data = previewData || fetchedData

    if (data) {
      return renderOnData(data)
    } else if (loading) {
      return <LoadingIndicator showImage={required} />
    } else if (errorOnLoad) {
      return this.renderError(errorOnLoad, required, description)
    } else {
      return null
    }
  }
}

CMSItemLoader.defaultProps = {
  required: true
}

export default CMSItemLoader

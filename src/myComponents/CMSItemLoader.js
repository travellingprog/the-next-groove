/**
 * Fetch a file that was created through our CMS and pass the data within to a "renderOnData"
 * function (which should be given as a prop)
 * However, for the sake of the Preview view within the CMS, you can also provide a previewData
 * object prop, which will be used as the data source instead.
 */
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import LoadingIndicator from './LoadingIndicator'

const basePath = (process.env.NODE_ENV === 'production') ? '/cms-content' : '/cms-dev-content'

class CMSItemLoader extends Component {
  state = {
    fetchedData: null,
    loading: false,
    errorOnLoad: false
  }

  async componentDidMount () {
    const { itemPath, previewData } = this.props

    try {
      if (!previewData) {
        this.setState({ loading: true })
        const response = await fetch(`${basePath}/${itemPath}`)
        if (!response.ok) {
          throw new Error(`Unable to retrieve content (${response.status})`)
        }

        const fetchedData = await response.json()
        // this.setState({ fetchedData, loading: false })
      }
    } catch (err) {
      console.error(`error fetching item ${itemPath}`, err)
      this.setState({ errorOnLoad: true, loading: false })
    }
  }

  render () {
    const { previewData, renderOnData } = this.props
    const { errorOnLoad, fetchedData, loading } = this.state
    const data = previewData || fetchedData

    if (data) {
      return renderOnData(data)
    } else if (loading) {
      return <LoadingIndicator />
    } else if (errorOnLoad) {
      return <Redirect to='/no-content' />
    } else {
      return null
    }
  }
}

export default CMSItemLoader

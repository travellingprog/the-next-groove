/**
 * A component that wraps the react-loadable functionality, which dynamically imports a page
 * component at the time that it is needed, thus providing easy code-splitting.
 */
import Loadable from 'react-loadable'
import React from 'react'

import ErrorIndicator from './ErrorIndicator'
import LoadingIndicator from './LoadingIndicator'

/**
 * The Loading component that is a fill-in for the component we wish to import,
 * until the moment that import is complete.
 */
const Loading = ({ error, pastDelay }) => {
  if (error) {
    return (
      <ErrorIndicator>
        Uh oh, we couldn&#39;t load this page<br />
        Try to reload it.
      </ErrorIndicator>
    )
  } else if (pastDelay) {
    return <LoadingIndicator />
  } else {
    // it's still too early to show a loading component
    return null
  }
}

const Importer = (loader) => Loadable({
  delay: 400,
  loader,
  loading: Loading
})

export default Importer

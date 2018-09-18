import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'

const Loading = () => <div>Loading...</div>

const Article = Loadable({
  loader: () => import('./Article'),
  loading: Loading
})

const Home = Loadable({
  loader: () => import('./Home'),
  loading: Loading
})

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/article/:articlePath' component={Article} />
    </Switch>
  </Router>
)

export default App

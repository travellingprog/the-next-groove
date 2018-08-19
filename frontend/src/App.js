import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'

const Loading = () => <div>Loading...</div>

const Home = Loadable({
  loader: () => import('./Home'),
  loading: Loading,
})

const Admin = Loadable({
  loader: () => import('./Admin'),
  loading: Loading,
})

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/admin" component={Admin}/>
    </Switch>
  </Router>
)

export default App;

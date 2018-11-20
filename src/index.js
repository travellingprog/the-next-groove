import React from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'normalize.css'

import './index.css'
import NoContent from 'myPages/NoContent'

const Loading = () => <div>Loading...</div>

const Article = Loadable({
  loader: () => import('myPages/Article'),
  loading: Loading
})

const Category = Loadable({
  loader: () => import('myPages/Category'),
  loading: Loading
})

const Home = Loadable({
  loader: () => import('myPages/Home'),
  loading: Loading
})

const Admin = Loadable({
  loader: () => import('myPages/Admin'),
  loading: Loading
})

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/admin' component={Admin} />
      <Route path='/article/:articlePath' component={Article} />
      <Route path='/category/:category' component={Category} />
      <Route path='/category/:category/:pageNum' component={Category} />
      <Route path='/no-content' component={NoContent} />
      <Route path='/page/:pageNum' component={Home} />
      <Route component={NoContent} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'))

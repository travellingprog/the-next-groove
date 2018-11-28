import React from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Titled } from 'react-titled'
import 'normalize.css'

import './index.css'
import NoContent from 'myPages/NoContent'

const Loading = () => <div>Loading...</div>

const About = Loadable({
  loader: () => import('myPages/About'),
  loading: Loading
})

const Admin = Loadable({
  loader: () => import('myPages/Admin'),
  loading: Loading
})

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

const App = () => (
  <BrowserRouter>
    <Titled title={() => 'The Next Groove'}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/admin' component={Admin} />
        <Route path='/article/:articlePath' component={Article} />
        <Route path='/category/:category' component={Category} />
        <Route path='/category/:category/:pageNum' component={Category} />
        <Route path='/no-content' component={NoContent} />
        <Route path='/page/:pageNum' component={Home} />
        <Route component={NoContent} />
      </Switch>
    </Titled>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'))

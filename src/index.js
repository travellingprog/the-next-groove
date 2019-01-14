/**
  * The Next Groove
  * Our routes and global CSS is set here
  */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Titled } from 'react-titled'
import 'normalize.css'

import './index.css'
import Importer from 'myComponents/Importer'
import NotFound from 'myPages/NotFound'

const About = Importer(() => import('myPages/About'))
const Admin = Importer(() => import('myPages/Admin'))
const Article = Importer(() => import('myPages/Article'))
const Category = Importer(() => import('myPages/Category'))
const Home = Importer(() => import('myPages/Home'))

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
        <Route path='/not-found' component={NotFound} />
        <Route path='/page/:pageNum' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Titled>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'))

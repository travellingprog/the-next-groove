import React from 'react'

import logo from 'myAssets/images/logo.svg'
import './Home.css'

const Home = () => (
  <div className='my-Home'>
    <header className='my-Home-header'>
      <img src={logo} className='my-Home-logo' alt='logo' />
      <h1 className='my-Home-title'>Welcome to React</h1>
    </header>
    <p className='my-Home-intro'>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
)

export default Home

import React, { Component } from 'react'

import smallLogo from './images/Logo-small-x35.png'
import fullScreenImg from './images/screen-full-32px-blue.png'
import logoImg from './images/Logo-x45.png'
import menuImg from './images/th-menu-48px-blue.png'
import viewImg from './images/eye-outline-48x-blue.png'
import './Article.css'

class Article extends Component {
  state = {
    menuOpen: false
  }

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render () {
    const { match } = this.props
    const { menuOpen } = this.state

    let stickyClass = 'tng-Article-stickyBar' + (menuOpen ? ' is-shifted' : '')
    let menuClass = 'tng-Article-menu' + (menuOpen ? ' is-visible' : '')
    let contentClass = 'tng-Article-content' + (menuOpen ? ' is-shifted' : '')

    return (
      <div className='tng-Article'>
        <div className={stickyClass}>
          <img className='tng-Article-smallLogo' src={smallLogo} />
          <div className='tng-Article-stickyBtns'>
            <button className='tng-Article-stickyBtn' onClick={this.toggleMenu}>
              <img className='tng-Article-fullScreenImg' src={fullScreenImg} />
            </button>
            <button className='tng-Article-stickyBtn' onClick={this.toggleMenu}>
              <img className='tng-Article-viewImg' src={viewImg} />
            </button>
            <button className='tng-Article-stickyBtn' onClick={this.toggleMenu}>
              <img className='tng-Article-menuImg' src={menuImg} />
            </button>
          </div>
        </div>
        <div className={menuClass}>
          Menu here
        </div>
        <div className={contentClass}>
          <div className='tng-Article-logoContainer'>
            <img className='tng-Article-logo' src={logoImg} />
          </div>
          <div className='tng-Article-image'>
            Image
          </div>
          <div className='tng-Article-titleBox'>
            Title Box
          </div>
          <div className='tng-Article-text'>
            <strong>Article path: /{match.params.articlePath}</strong>
            <br />
            Do you remember 2011? 2012? Do you remember when Nights Slugs sounded like the future? When
            Future Garage was still a thing? When the Butterz crew initiated the "Grime Revival"? When
            Marcell Detmann and Ben Klock were making techno cool again? When the aggro, "bro" side of
            Dubstep spearheaded the global takeover of festival EDM culture?
            <br />
            A last one: Do you remember when Swamp 81 was one of the coolest, trendiest labels and crews
            in underground club/electronic music?
            <br />
            ♪
            <br />
            Swamp 81 was founded in the late 2000s by DMZ member and Dubstep pioneer, Loefah.
            Discouraged by the direction the genre had taken, he starts his new label in order to push a
            sound that went more with his tastes. The first few releases - notably a couple from Kryptic
            Minds - are characterized by a return to Dubstep's "roots" (the noisy, aggressive sound was
            overtaking the scene by then) : the dark and minimal, halftime style.
            <br />
            But the label took a sudden turn in 2010 with its 5th release: Addison Groove's (aka
            Headhunter) 12" record with Footcrab (and Dumbshit on the B-side). It became an immediate
            hit in the underground. The Juke-inspired, lo-fi, bassy, drum-machine track sounded like
            nothing else in Dubstep.
            <br />
          </div>
        </div>
      </div>
    )
  }
}

export default Article

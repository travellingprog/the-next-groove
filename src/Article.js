import React, { Component } from 'react'

import articleImg from './images/Boddika.jpg'
// import articleImg from './images/narrowImg.jpeg'
import fullScreenImg from './images/screen-full-32px-blue.png'
import logoImg from './images/Logo-x45.png'
import menuImg from './images/th-menu-48px-blue.png'
import smallLogo from './images/Logo-small-x35.png'
import viewImg from './images/eye-outline-48x-blue.png'
import './Article.css'

class Article extends Component {
  state = {
    bgShift: 0,
    menuOpen: false
  }

  /** check the dimension of the article's main image, to create a cool background */
  componentDidMount () {
    const component = this
    const img = new window.Image()

    img.onload = function () {
      // We need to shift our background image by half of the main image's width, in vw units.
      // We can calculate that amount by knowing the main image's height is 66.66vw
      component.setState({ bgShift: (66.66 / this.height) * this.width * 0.5 })
    }

    img.src = articleImg
  }

  /** Change whether the menu is open or closed */
  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render () {
    const { bgShift, menuOpen } = this.state

    const stickyClass = 'tng-Article-stickyBar' + (menuOpen ? ' is-shifted' : '')
    const menuClass = 'tng-Article-menu' + (menuOpen ? ' is-visible' : '')
    const contentClass = 'tng-Article-content' + (menuOpen ? ' is-shifted' : '')

    let bgLStyle = { backgroundImage: `url(${articleImg})` }
    let bgRStyle = { ...bgLStyle }
    if (bgShift) {
      bgLStyle.transform = `translate3d(-${bgShift}vw, 0, 0)`
      bgRStyle.transform = `translate3d(${bgShift}vw, 0, 0)`
    }

    return (
      <div className='tng-Article'>
        <div className={stickyClass}>
          <img className='tng-Article-smallLogo' src={smallLogo} alt='' />
          <div className='tng-Article-stickyBtns'>
            <button className='tng-Article-stickyBtn' onClick={this.toggleMenu}>
              <img alt='' className='tng-Article-fullScreenImg' src={fullScreenImg} />
            </button>
            <button className='tng-Article-stickyBtn' onClick={this.toggleMenu}>
              <img alt='' className='tng-Article-viewImg' src={viewImg} />
            </button>
            <button className='tng-Article-stickyBtn' onClick={this.toggleMenu}>
              <img alt='' className='tng-Article-menuImg' src={menuImg} />
            </button>
          </div>
        </div>
        <div className={menuClass}>
          Menu here
        </div>
        <div className={contentClass}>
          <div className='tng-Article-logoContainer'>
            <img alt='' className='tng-Article-logo' src={logoImg} />
          </div>
          <div className='tng-Article-imageContainer'>
            <img alt='' className='tng-Article-image' src={articleImg} />
            <div className='tng-Article-imageBackground' style={bgLStyle} />
            <div
              className='tng-Article-imageBackground tng-Article-imageBackground--right'
              style={bgRStyle}
            />
          </div>
          <div className='tng-Article-titleBox'>
            <div className='tng-Article-title'>Boddika's Drum-Machine Music</div>
            <div className='tng-Article-category'>Showcase Mix</div>
            <div className='tng-Article-publishDate'>published on Aug 12, 2018</div>
          </div>
          <div className='tng-Article-text'>
            Do you remember 2011? 2012? Do you remember when Nights Slugs sounded like the future? When
            Future Garage was still a thing? When the Butterz crew initiated the "Grime Revival"? When
            Marcell Detmann and Ben Klock were making techno cool again? When the aggro, "bro" side of
            Dubstep spearheaded the global takeover of festival EDM culture?
            <br /><br />
            A last one: Do you remember when Swamp 81 was one of the coolest, trendiest labels and crews
            in underground club/electronic music?
            <br /><br />
            ♪
            <br /><br />
            Swamp 81 was founded in the late 2000s by DMZ member and Dubstep pioneer, Loefah.
            Discouraged by the direction the genre had taken, he starts his new label in order to push a
            sound that went more with his tastes. The first few releases - notably a couple from Kryptic
            Minds - are characterized by a return to Dubstep's "roots" (the noisy, aggressive sound was
            overtaking the scene by then) : the dark and minimal, halftime style.
            <br /><br />
            But the label took a sudden turn in 2010 with its 5th release: Addison Groove's (aka
            Headhunter) 12" record with Footcrab (and Dumbshit on the B-side). It became an immediate
            hit in the underground. The Juke-inspired, lo-fi, bassy, drum-machine track sounded like
            nothing else in Dubstep.
          </div>
        </div>
      </div>
    )
  }
}

export default Article

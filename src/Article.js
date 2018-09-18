import React, { Component } from 'react'

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
          <span>
            Sticky Bar
          </span>
          <button className='tng-Article-menuBtn' onClick={this.toggleMenu}>
            M
          </button>
        </div>
        <div className={menuClass}>
          Menu here
        </div>
        <div className={contentClass}>
          <div className='tng-Article-logo'>
            Logo Box
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

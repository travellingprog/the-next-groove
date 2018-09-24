import React, { Component } from 'react'

import articleImg from './images/Boddika.jpg'
// import articleImg from './images/narrowImg.jpeg'
import logoImg from './images/Logo-x45.png'
import './ArticleContent.css'

const iframes = [
  'Addison Groove - Footcrab',
  'Instra:mental - Sakura',
  'Boddika mix'
]

class ArticleContent extends Component {
  iframeRefs = iframes.map(() => React.createRef())

  state = {
    aspectPercentages: iframes.map(() => ''),
    bgShift: 0
  }

  componentDidMount () {
    this.setBackgroundImagesShift()
    this.saveAspectRatios()
  }

  /**
   * Get the aspect percentages of all provided iframes, unless they have a dimension that is not
   * defined in pixels (e.g. Soundcloud iframe code sets width as 100%). These aspect percentages
   * can be used to make the iframe responsive
   */
  saveAspectRatios () {
    let aspectPercentages = this.iframeRefs.map(ref => {
      let elem = ref.current
      let isPixelNumbers = /^\d+$/.test(`${elem.width}${elem.height}`)
      return isPixelNumbers
        ? `${elem.height * 100 / elem.width}%` : ''
    })

    this.setState({ aspectPercentages })
  }

  /**
   * check the dimension of the article's main image, to figure out how much to shift the adjacent
   * background images, which creates a cool effect
   */
  setBackgroundImagesShift () {
    const component = this
    const img = new window.Image()

    img.onload = function () {
      // We need to shift our background image by half of the main image's width, in vw units.
      // We can calculate that amount by knowing the main image's height is 66.66vw
      component.setState({ bgShift: (66.66 / this.height) * this.width * 0.5 })
    }

    img.src = articleImg
  }

  render () {
    const { aspectPercentages, bgShift } = this.state

    let bgLStyle = { backgroundImage: `url(${articleImg})` }
    let bgRStyle = { ...bgLStyle }
    if (bgShift) {
      bgLStyle.transform = `translate3d(-${bgShift}vw, 0, 0)`
      bgRStyle.transform = `translate3d(${bgShift}vw, 0, 0)`
    }

    return (
      <div>
        <div className='tng-ArticleContent-logoContainer'>
          <img alt='' className='tng-ArticleContent-logo' src={logoImg} />
        </div>
        <div className='tng-ArticleContent-imageContainer'>
          <div className='tng-ArticleContent-imageBackground' style={bgLStyle} />
          <div
            className='tng-ArticleContent-imageBackground tng-ArticleContent-imageBackground--right'
            style={bgRStyle}
          />
          <img alt='' className='tng-ArticleContent-image' src={articleImg} />
        </div>
        <div className='tng-ArticleContent-titleBox'>
          <div className='tng-ArticleContent-title'>Boddika's Drum-Machine Music</div>
          <div className='tng-ArticleContent-category'>Showcase Mix</div>
          <div className='tng-ArticleContent-publishDate'>published on Aug 12, 2018</div>
        </div>
        <div className='tng-ArticleContent-text'>
          <p>
            Do you remember 2011? 2012? Do you remember when Nights Slugs sounded like the future?
            When Future Garage was still a thing? When the Butterz crew initiated the "Grime
            Revival"? WhenMarcell Detmann and Ben Klock were making techno cool again? When the
            aggro, "bro" side of Dubstep spearheaded the global takeover of festival EDM culture?
          </p>
          <p>
            A last one: Do you remember when Swamp 81 was one of the coolest, trendiest labels and
            crews in underground club/electronic music?
          </p>
          <p>
            ♪
          </p>
          <p>
            Swamp 81 was founded in the late 2000s by DMZ member and Dubstep pioneer, Loefah.
            Discouraged by the direction the genre had taken, he starts his new label in order to
            push a sound that went more with his tastes. The first few releases - notably a couple
            from Kryptic Minds - are characterized by a return to Dubstep's "roots" (the noisy,
            aggressive sound was overtaking the scene by then) : the dark and minimal, halftime
            style.
          </p>
          <p>
            But the label took a sudden turn in 2010 with its 5th release: Addison Groove's (aka
            Headhunter) 12" record with Footcrab (and Dumbshit on the B-side). It became an immediate
            hit in the underground. The Juke-inspired, lo-fi, bassy, drum-machine track sounded like
            nothing else in Dubstep.
          </p>
          <div className={aspectPercentages[0] ? 'tng-ArticleContent-fluidFrameWrapper' : ''}
            style={aspectPercentages[0] ? { paddingBottom: aspectPercentages[0] } : {}} >
            <iframe width='560' height='315' src='https://www.youtube.com/embed/gWfiog1Ure4'
              frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen
              ref={this.iframeRefs[0]} title={iframes[0]} />
          </div>
          <p>
            The British had just discovered (or re-discovered) America's "Ghetto Bass" music from
            the 90s: Starting with Juke and Footwork, then with Ghettotech and Ghetto House; all
            from Detroit and Chicago. Also worth mentioning, Trap's 808-infused beats was beginning
            its ascension right about then.
          </p>
          <p>
            Quickly, Loefah's interests shifted towards this "drum-machine" styled bass music,
            exploring the past while trying to push fresh, new sounds. Hyped by the two most
            influential music journals in underground electronic music, Fact Magazine and Resident
            Advisor, the label also became an influential force. In the early 2010s, Loefah was
            joined by like-minded producers such as the Hessle Audio co-founder Ramadanman (now
            known as Pearson Sound), Addison Groove, Mickey Pearce, UK Garage legend Zed Bias,
            Paleman, Joy Orbison...
          </p>
          <p>
            And, of course, Boddika.
          </p>
          <p>
            ♪
          </p>
          <p>
            Boddika's musical origins are in Drum N Bass, as one-half of Instra:mental. The duo was
            active in the 2000s, initially pushing a sound reminiscent of Metalheadz, and
            collaborating with Drum N Bass pioneers and heroes, Source Direct and Jonny L. It was
            good music, but it wasn't anything that distinguished itself from what had been done,
            and what was being done, in the genre. However, by the end of the decade, they started
            to explore a more moody, emotional and sometimes cinematic side to their style.
            Throughout 2009, Jon Convex (aka Kid Drama), the other half of Instra:mental, did a
            series of podcasts with D-Bridge, taking this style further and further. It came to be
            known as the "Autonomic" sound, which was the name of the podcast*.
          </p>
          <div className={aspectPercentages[1] ? 'tng-ArticleContent-fluidFrameWrapper' : ''}
            style={aspectPercentages[1] ? { paddingBottom: aspectPercentages[1] } : {}} >
            <iframe width='560' height='315' src='https://www.youtube.com/embed/8Kp_0kiSKaA'
              frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen
              ref={this.iframeRefs[1]} title={iframes[1]} />
          </div>
          <p>
            * A good write-up of this is done here
          </p>
          <p>
            The duo also ventured out of Drum N Bass, and into Electro, Techno and House territory,
            dropping all the way down to the 130-140 bpm range. Their last big hurrah before their
            split was a career-defining LP, Resolution 653, released in 2011, in which they leaned
            towards an experimental Electro and Techno sound. By then, they had fully assumed a
            "drum-machine" sound,  taking it to its extremes. Although the duo split, Boddika made
            this sound his own. In Swamp 81, he found a place were he could foster it. He also
            released music on other labels such as his own Nonplus+, Sunklo, and [NakedLunch].
          </p>
          <p>
            ♪
          </p>
          <p>
            The Mix
          </p>
          <div className={aspectPercentages[2] ? 'tng-ArticleContent-fluidFrameWrapper' : ''}
            style={aspectPercentages[2] ? { paddingBottom: aspectPercentages[2] } : {}} >
            <iframe width='100%' height='300' scrolling='no' frameBorder='no' allow='autoplay'
              ref={this.iframeRefs[2]} title={iframes[2]}
              src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/487023597&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true' />
          </div>
          <p>
            Tracklist:<br />
            00:00 - Instra:mental - Forbidden (Apple Pips)<br />
            02:57 - Instra:mental - Futurist (NakedLunch)<br />
            05:32 - Joy Orbison, Boddika & Pearson Sound - Faint (Sunklo)<br />
            06:46 - Boddika - Crack (Swamp 81)<br />
            08:44 - Boddika - Syn Chron (NakedLunch)<br />
            11:12 - Boddika - 2727 (Swamp 81)<br />
            14:00 - Boddika - Basement (Swamp 81)<br />
            15:47 - Boddika - You Tell Me (Nonplus)<br />
            19:26 - Boddika - Beats Me (Nonplus)<br />
            21:00 - Boddika - Rubba (Swamp 81)<br />
            23:37 - Joy Orbison & Boddika - In Here (Sunklo)<br />
            26:20 - Joy Orbison & Boddika - More Maim (Sunklo)<br />
          </p>
          <p>
            This showcase starts with two Instra:mental tracks, Forbidden and Futurist, in order to
            have a contrast with the rest of the mix. The first track, while being in the 130 bpm
            range, is incredibly reminiscent of Boddika's Drum N Bass roots. The second is a good
            example of the "Autonomic" vibe they were doing. Notice how, in Forbidden, the
            production has a warm tone to it; it's very clean-sounding and polished. In Futurist,
            their goal is to create a sort of moody reverie, with a "lush" production style. Then,
            Faint, a collaboration with two Swamp 81 label-mates, goes straight into what I call
            "Drum-Machine Music", as practiced by Boddika and the rest of Don Loefah' crew.
          </p>
          <p>
            Generally, in electronic music , the machines (or the plug-ins) used to create the music
            are tools that serve a whole. Each sound emitted by these machines are building blocks
            for a composition. Especially now, and recently, everything has to be "polished",
              rounded. The aesthetic is the mood this "whole", the composition, creates.
          </p>
          <p>
            But with Boddika, the machine is the aesthetic. The machine manifests itself, calls
            attention to itself. Its texture and artificiality are made evident. Notice the raw,
            unpolished drum sounds throughout the mix, and the sharp hi-hats. Almost all of the drum
            sounds are dry ("dry" as in "no reverb at all"). In Rubba, even the snares are
            ridiculously snappy. If UK Garage was all about off-beat "swing", then Boddika has the
            "swing" dial turned all the way down. It's as if his beat patterns are limited to what
            an old drum-machine's interface is able to do. The music sounds very "modern", but,
            like listening to an old Electro track, it's incredibly obvious that a machine is making
            this sound.
          </p>
          <p>
            This "drum-machine" approach affects everything. Notice the synths, how they're shaped
            into twisted, sometimes atonal, forms, going in and out through clumsily applied filters
            and dials, having a life of their own, almost ignoring the notion of "harmony". Just
            like the hi-hats, they're razor-sharp and direct. You Tell Me takes this aesthetic to
            its extreme, with the ear-bleeding LFOs being torn apart and its off-key melodies. And
            notice the drum-machine jam that is Beats Me, in which the backing speech sample (a
            "sensual voice" like in an old Chicago House track) is manipulated and deformed as to
            become incomprehensible. Again, it's the machine, the artificial nature of the music,
            that is highlighted. It directs and informs the composition.
          </p>
          <p>
            All of this is done deliberately. As we have seen, Boddika is able to create a
            "polished" sound if he wants to. But his goal, in the early 2010s, was to create raw and
            "immediate" beats, influenced by American "Ghetto Bass" music and the UK Hardcore's
            fixation on the groove (percussion and bass dynamic).
          </p>
          <p>
            ♪
          </p>
          <p>
            The mix ends with the one-two punch assault of In Here and More Maim. Both were released
            in 2014 on the same 12" record on Sunklo (his and Joy Orbison's label where they
              released their collaborations). And both represent, at least for me, the end of
            Boddika's drum-machine era. Since then, he has transitioned into to a more
            by-the-numbers techno sound, focusing on releasing other people's music on his own
            Nonplus+ label.
          </p>
          <p>
            This aesthetic in dance music isn't exclusive to him. Of course, he takes it to another
            level, but it's an approach others have also done, whether in Dancehall, in House, or
            Dubstep. The Swamp 81 crew were simply some of the practitioners.
          </p>
        </div>
      </div>
    )
  }
}

export default ArticleContent

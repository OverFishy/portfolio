import { Icons, Skills } from './skills'
import './myskills.css'
import profilePic from './images/ProfilePicture.png'
import ScrollTrigger from 'react-scroll-trigger';
import React from 'react'

export class MySkills extends React.Component {

  onEnterViewport = () => {
    setTimeout( () => {
      this.setState({
        visible: true,
      })
    }, 800);
  }

  onExitViewport = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
    < ScrollTrigger>
      <div>
        <h1>My skills</h1>
        <h2>About my self</h2>
        <p>My name is Ofek, I'm 25 Y.O from Tel-Aviv israel,
          I would say I'm pretty outgoing and social, I love to spend time hanging with
          friends & familiy.
          I keep an active lifestyle with a variety of diffrent sports, I'll surf, play football, soccer  & workout!
          Every once in a while, I'd pack a bag, and go on a trip, by foot or my motorsycle.
        </p>
        <p><strong>Keep reading my bio</strong></p>
        < Skills />
      </div>
    </ScrollTrigger>
    )
  }
}

export class MySkillsTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visible: ''};
  }

  onEnterViewport = () => {
    setTimeout( () => {
      this.setState({
        visible: true,
      })
    }, 800);
  }

  onExitViewport = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      < ScrollTrigger onEnter={this.onEnterViewport} onExit={this.onExitViewport}>
        <div className={`content-card container ${this.state.visible ? 'personal-animate' : ''}`}>
          <div className='info'>
            <img src={profilePic} alt='my profile img' />
            <div className='profile-info'>
              <h1>My skills</h1>
              <h3>About my self</h3>
              <p>My name is Ofek, I'm 25 Y.O from Tel-Aviv israel,
                I would say I'm pretty outgoing and social, I love to spend time hanging with
                friends & familiy.
                I keep an active lifestyle with a variety of diffrent sports, I'll surf, play football, soccer  & workout!
                Every once in a while, I'd pack a bag, and go on a trip, by foot or my motorsycle.</p>
            </div>
          </div>
          <div className='badges'>
            < Icons />
          </div>
        </div>
      </ ScrollTrigger>
    )
  }
}

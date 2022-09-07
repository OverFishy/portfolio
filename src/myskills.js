import { Icons, Skills } from './skills'
import { HashLink as Link } from 'react-router-hash-link';
import './myskills.css'
import profilePic from './images/ProfilePicture.png'
import ScrollTrigger from 'react-scroll-trigger';
import React from 'react'

export class MySkills extends React.Component {

  onEnterViewport = () => {
    setTimeout(() => {
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
  render() {
    let width = window.innerWidth;
    console.log(width);
    if (width > 1060) {
      return (
        <div className={'content-card'}>
          <div className='info'>
            <img src={profilePic} alt='my profile img' />
            <div className='profile-info'>
              <h1>About myself</h1>
              <h3>short introduction</h3>
              <div className='text-container'>
                <p>Hey, my name is Ofek, I'm 25 Y.O. from Tel-Aviv Israel.
                I'm pretty outgoing, social and I love to spend time hanging out with
                friends and family.
                I keep an active lifestyle, I practice a variety of different sports including wave surfing, playing football, soccer and working out!
                Every once in a while, I pack a bag, and go on a trip, by foot or my motorcycle.</p>
                <Link className='btn-bio' to="/about#about">Keep reading my bio</Link>
              </div>
            </div>
          </div>
          <div className='badges'>
            < Icons />
          </div>
        </div>
      )
    } else {
      return (
        <div className='content-card-mobile-container'>
          <div className='content-card-mobile'>
            <img src={profilePic} alt='my profile img' />
            <div className='about-header'>
              <h1>About myself</h1>
              <h3>short introduction</h3>
            </div>
            <div className='text'>
              <p>Hey, my name is Ofek, I'm 25 Y.O. from Tel-Aviv Israel.
                I'm pretty outgoing, social and I love to spend time hanging out with
                friends and family.
                I keep an active lifestyle, I practice a variety of different sports including wave surfing, playing football, soccer and working out!
                Every once in a while, I pack a bag, and go on a trip, by foot or my motorcycle.</p>
              <Link className='btn-bio' to="/about">Keep reading my bio</Link>
            </div>
          </div>
          <div className='icons-section'>
              < Icons />
          </div>
        </div>
      )
    }
  }
}

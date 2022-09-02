import React from 'react'
import { Link } from "react-router-dom";
import './project.css';
import dogLeft from './images/projectGifs/dogLeft.gif'
import dogRight from './images/projectGifs/dogRight.gif'
import { MotionAnimate } from 'react-motion-animate'
import ScrollTrigger from 'react-scroll-trigger';



export class Project extends React.Component {
  constructor(props) {
    super(props);
    this.projectURL = this.props.name.split(' ').join('')
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

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    return (
        <div className={`project-content ${this.props.className || ''}`}>
          < MotionAnimate
            animation='fadeInUp'
            reset={true}
            distance={200}
            delay={0.6}
            speed={1}>
            <div className='gif-container-left'>
              <img src={dogLeft} alt=''/>
            </div>
          </MotionAnimate>
          <ScrollTrigger onEnter={this.onEnterViewport} onExit={this.onExitViewport}>
            <div class={`card container ${this.state.visible ? 'card-animate' : ''}`}>
              <div class={ "image" }>
                <img src={this.props.src} width="100%" alt=''/>
              </div>
              <div class="text">
                <div class="fab">
                  {/* &#43; */}
                  <Link to={this.projectURL}><span class="button-text" id='plusbtn'>&#43;</span></Link>
                </div>
                <h3>{this.props.name}</h3>
                <p>{this.props.children}</p>
              </div>
            </div>
          </ScrollTrigger>
          < MotionAnimate
            animation='fadeInUp'
            reset={true}
            distance={200}
            delay={0.6}
            speed={1}>
            <div className='gif-container-right'>
              <img src={dogRight} alt=''/>
            </div>
          </MotionAnimate>
        </div>
    )
  }
}


// className={`container ${this.state.visible ? 'card-animate' : ''}`}

// DATA IN RAW FORM
{/* <div className='project'>
<h3>{this.props.name}</h3>
<h4>{this.props.position}</h4>
<p>{this.props.children}</p>
<Link to={this.projectURL}>View Project</Link>
</div> */}

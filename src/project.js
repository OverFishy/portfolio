import React from 'react'
import './project.css';
import ScrollTrigger from 'react-scroll-trigger';

// ANIMATION IMPROTS
// import dogLeft from './images/projectGifs/dogLeft.gif'
// import dogRight from './images/projectGifs/dogRight.gif'
// import { MotionAnimate } from 'react-motion-animate'


export class Project extends React.Component {
  constructor(props) {
    super(props);
    this.projectURL = this.props.name.split(' ').join('')
    this.state = { visible: '' };
  }

  onEnterViewport = () => {
    setTimeout(() => {
      this.setState({
        visible: true,
      })
    }, 400);
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
      <div id={`${this.props.id}`} className={`project-content ${this.props.className || ''}`}>
        <ScrollTrigger onEnter={this.onEnterViewport} onExit={this.onExitViewport}>
          <div class={`card container ${this.state.visible ? 'card-animate' : ''}`}>
            <div class={"image"}>
              <img src={this.props.src} width="100%" alt='' />
            </div>
            <div class="text">
              <div class="fab">
                <a href={this.projectURL}>&#43;</a>
              </div>
              <h3>{this.props.name}</h3>
              <p>{this.props.children}</p>
            </div>
          </div>
        </ScrollTrigger>
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


// RIGHT GIF ANIMATION AND SCROLL IN
{/* < MotionAnimate
            animation='fadeInUp'
            reset={true}
            distance={200}
            delay={0.6}
            speed={1}>
            <div className='gif-container-right'>
              <img src={dogRight} alt=''/>
            </div>
</MotionAnimate> */}

// LEFT GIF ANIMATION AND SCROLL IN
{/* < MotionAnimate
            animation='fadeInUp'
            reset={true}
            distance={200}
            delay={0.6}
            speed={1}>
            <div className='gif-container-left'>
              <img src={dogLeft} alt=''/>
            </div>
</MotionAnimate> */}

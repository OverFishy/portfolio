import React from 'react'
import { Link } from "react-router-dom";
import './project.css';
import dogLeft from './images/projectGifs/dogLeft.gif'
import dogRight from './images/projectGifs/dogRight.gif'




export class Project extends React.Component {
  constructor(props) {
    super(props);
    this.projectURL = this.props.name.split(' ').join('')
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-8 col-xs-12 col-md-offset-3 col-sm-offset-2">
            <div className='project-content'>
              <div className='gif-container-left'>
                <img src={dogLeft} alt=''/>
              </div>
              <div class="card">
                <div class="image">
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
              <div className='gif-container-right'>
                <img src={dogRight} alt=''/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



// DATA IN RAW FORM
{/* <div className='project'>
<h3>{this.props.name}</h3>
<h4>{this.props.position}</h4>
<p>{this.props.children}</p>
<Link to={this.projectURL}>View Project</Link>
</div> */}

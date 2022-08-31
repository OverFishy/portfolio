import React from 'react'
import { Link } from "react-router-dom";
import './project.css';

export class Project extends React.Component {
  constructor(props) {
    super(props);
    // this.projectName = this.props.name.toLowerCase()
    this.projectURL = this.props.name.split(' ').join('')
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    return (
      <div className='project'>
        <h3>{this.props.name}</h3>
        <h4>{this.props.position}</h4>
        <p>{this.props.children}</p>
        <Link to={this.projectURL}>View Project</Link>
      </div>
    )
  }
}

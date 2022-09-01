// import './projectButton.css';
import { Link } from "react-router-dom";
import React from 'react'

// export function ProjectButton() {
export class ProjectButton extends React.Component {
  render() {
    return (
      <>
        <button class="learn-more">
          <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
          </span>
          <Link to={this.props.link}><span class="button-text">View more</span></Link>
        </button>
      </>
    )
  }

}

import React from 'react'
import { NavBar } from '../navbar'
import { FooterTest } from '../footer'
import { Carousel } from './carousel'

import './projectPage.css'

export class ProjectPageStructureText extends React.Component {

  render() {
    // let linkGit = this.props.github ? <Link to={this.props.github} target='_blank'>GitHub code</Link> : ''
    // let linkSite = this.props.site ? <Link to={this.props.site} target='_blank'>Live site</Link> : ''
    let linkGit = this.props.github ? <a href={this.props.github} class='bn5' target='_blank' rel="noreferrer">GitHub code</a> : ''
    let linkSite = this.props.site ? <a href={this.props.site} class='bn5' target='_blank' rel="noreferrer">Live site</a> : ''
    console.log(this.props.github, this.props.site);

    return (
        <div className='project-page-container'>
          < NavBar />
          <div className='project-page-content'>
            <h1>{this.props.projectName}</h1>
            <div className='project-links'>
              {linkGit}
              {linkSite}
            </div>
            <h2>Project Purpose and Goals</h2>
            <p>{this.props.projectPurpose}</p>
            <h2>Web Stack and Explanation</h2>
            <p>{this.props.projectWebStack}</p>
            <h2>Problems and Thought Process</h2>
            <p>{this.props.projectProblens}</p>
            <h2>Lessons Learned</h2>
            <p>{this.props.projectlessons}</p>
          </div>
        < Carousel projectPics={this.props.projectPics}/>
        < FooterTest />
      </div>
    )
  }
}

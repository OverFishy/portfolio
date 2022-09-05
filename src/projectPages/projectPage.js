import React from 'react'
import { NavBar } from '../navbar'
import { FooterTest } from '../footer'
import { Carousel } from './carousel'

import './projectPage.css'

export class ProjectPageStructureText extends React.Component {

  render() {
    return (
        <div className='project-page-container'>
          < NavBar />
          <div className='project-page-content'>
            <h1>{this.props.projectName}</h1>
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

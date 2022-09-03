import React from 'react'
import { NavBar } from '../navbar'
import { Footer } from '../footer'

export class ProjectPageStructureText extends React.Component {
  log() {
    console.log(`this is my log: ${this.props.projectName}`);
  }
  render() {
    return (
      <div>
        < NavBar />
        <h1>{this.props.projectName}</h1>
        <h2>Project Purpose and Goal</h2>
        <p>{this.props.projectPurpose}</p>
        <h2>Web Stack and Explanation</h2>
        <p>{this.props.projectWebStack}</p>
        <h2>Problems and Thought Process</h2>
        <p>{this.props.projectProblens}</p>
        <h2>Lessons Learned</h2>
        <p>{this.props.projectlessons}</p>
        < Footer />
      </div>
    )
  }
}

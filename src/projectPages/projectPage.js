import React from 'react'

export class ProjectPageStructure extends React.Component {
  render() {
    return (
      <div>
        <h1>PROJECT NAME</h1>
        <p>{this.props.projectName}</p>
        <h2>Project Purpose and Goal</h2>
        <p>{this.props.projectPurpose}</p>
        <h2>Web Stack and Explanation</h2>
        <p>{this.props.projectWebStack}</p>
        <h2>Problems and Thought Process</h2>
        <p>{this.props.projectProblens}</p>
        <h2>Lessons Learned</h2>
        <p>{this.props.projectlessons}</p>
      </div>
    )
  }
}

import React from 'react'

export class Project extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <h4>{this.props.position}</h4>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

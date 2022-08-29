import React from 'react'

export class Project extends React.Component {
  render() {
    return (
      <p>{this.props.name}, {this.props.children}</p>
    )
  }
}

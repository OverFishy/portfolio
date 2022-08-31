import React from 'react'
import { NavBar } from '../navbar'
import { Footer } from '../footer'

export class ProjectPageStructure extends React.Component {
  render() {
    return (
      <div>
        < NavBar />
        <p>{this.props.children}</p>
        < Footer />
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Student extends Component {

  render() {
    this.props.name = "safd"
    return (
      <div>
        <h1>Welcome to class components</h1>
        <h2>Class Components</h2>
        <h3>My name is {this.props.name}</h3>
        <h3>My age : {this.props.age}</h3>
      </div>
    )
  }
}

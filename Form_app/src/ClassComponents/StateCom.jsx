import React, { Component } from 'react'

export default class StateCom extends Component {
    
   constructor() {
     super()
     this.state = {
        name:"Rohan"
     }
   }
   changeName(){
    this.setState({
        name:"Learning react here..."
    })
   }
   

  render() {
    return (
      <div>
        <h1>This is Class components using state</h1>
        <h2>Name is  : {this.state.name}</h2>
        <button onClick={()=>this.changeName()}>SateUpdate</button>
      </div>
    )
  }
}



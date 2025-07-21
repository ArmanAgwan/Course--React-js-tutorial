import React, { Component } from 'react'
import ChildComponents from './ChildComponents'

class ParentComponents extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         ParentName: "Parent"
      }

      this.greetParent = this.greetParent.bind(this)
    }

    greetParent() {
      console.log (this)
        // alert(`Hello ${this.state.ParentName}`)

    }
  render() {
    return (
      <div>
         <ChildComponents greetHandler={this.greetParent} />
      </div>
    )
  }
}

export default ParentComponents
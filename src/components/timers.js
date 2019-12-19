import React, { Component } from 'react'
class timers extends Component {
   constructor(props){
       super(props)
       this.state={
           aux:0
       }
   }
   /////////////////////////////////
   setInterval(
    () => {
      // this.state.timer ++
      this.setState({
        aux: 15
      })
    },
    1000
  )
}


   ///////////////////////////////////
    render() {
        return (
            <div>
    <p>{this.state.aux}</p>
            </div>
        )
    }
}

export default timers
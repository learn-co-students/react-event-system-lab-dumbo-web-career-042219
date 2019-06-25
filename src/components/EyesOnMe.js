// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {


  yesGood = () => console.log("Good!"); //

  payAttention = () => console.log("Hey! Eyes on me!"); //


  render(){
    return (
      <button onFocus={this.yesGood} onBlur={this.payAttention}>Button</button>
    )
  }



}

export default EyesOnMe;

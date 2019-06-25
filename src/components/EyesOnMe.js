import React, { Component } from 'react';

class Eyes extends Component {

  blurred = () => console.log('Hey! Eyes on me!')
  focused = () => console.log('Good!')

render() {
  return (
    <button onFocus={this.focused} onBlur={this.blurred}>
    Look At This
    </button>
  )
}
}

export default Eyes

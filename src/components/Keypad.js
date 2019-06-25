// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

keyPadMessage = () => console.log("Entering password..."); //

  render() {
    return (
    <input onKeyUp={this.keyPadMessage} type="password" />
)  }

}

export default Keypad;

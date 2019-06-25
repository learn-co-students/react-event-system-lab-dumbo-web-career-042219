// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

iAmFocused = () => {
	console.log('Good!')
}

iAmBlurred = () => {
	console.log('Hey! Eyes on me!')
}

	render() {
		return (
				<div>
					<button onFocus={this.iAmFocused} onBlur={this.iAmBlurred} >Hello</button>
				</div>
			)
	}

}
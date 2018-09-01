import React, { Component } from 'react';
import styles from './navigationstyles.css';

/*const HamburgerButton = props => (*/
class HamburgerButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<button className="toggle-button">
				<div className="buttonline" />
				<div className="buttonline" />
				<div className="buttonline" />
			</button>
		);
	}
}

export default HamburgerButton;
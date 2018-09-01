import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import styles from './styles.css';

class BioCard extends Component {
	render() {
		return (
			<div className="bioCard">
				<div className ="bio">
				<h3 className="bioText">&ensp; CS Student&ensp;|&ensp;UC Santa Cruz</h3>
				<h3 className="bioText">&emsp;SDE Intern&nbsp; |&ensp;Expedia Group</h3>
				</div>
			</div>
		);
	}
}

export default BioCard;
import React, { Component } from 'react';
import styles from './navigationstyles.css';
import { Transition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';

const duration = 300;

class NavMenu extends Component {

	constructor(props) {
		super(props);
	}

	render() {
			return (
					<Transition in={this.props.isToggleOn} timeout={duration}>
						{(state) => (
							<nav className={`NavMenu NavMenu-${state}`}>
							<div>{this.props.isToggleOn}</div>
								<ul>
									<li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
									<li><NavLink exact activeClassName="active" to="/about">About</NavLink></li>
									<li><NavLink exact activeClassName="active" to="../../../../assets/MatthewLo_resume.pdf" target="_blank">Résumé</NavLink></li>
									<li><NavLink exact activeClassName="active" to="/projects">Projects</NavLink></li>
									<li><NavLink exact activeClassName="active" to="/blog">Blog</NavLink></li>
								</ul>
							</nav>
						)}
					</Transition>
			);
	}
}

export default NavMenu
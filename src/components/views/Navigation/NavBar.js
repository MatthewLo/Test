import React, { Component } from 'react';
import HamburgerButton from './HamburgerButton';
import styles from './navigationstyles.css';
import HomePage from '../HomePage';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
	render() {
		return(
			<header className="navbar">
				<nav className="navbar_navigation">
					<div className="navbar_navigation-items">
						<ul>
							<li className="leftedge"><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
							<li className="mid"><NavLink exact activeClassName="active" to="/about">About</NavLink></li>
							<li className="mid"><NavLink exact activeClassName="active" to="../../../../assets/MatthewLo_resume.pdf" target="_blank">Résumé</NavLink></li>
							<li className="mid"><NavLink exact activeClassName="active" to="/projects">Projects</NavLink></li>
							<li className="rightedge"><NavLink exact activeClassName="active" to="/blog">Blog</NavLink></li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}

export default NavBar;
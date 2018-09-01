import React, { Component } from 'react';
import HamburgerButton from './HamburgerButton';
import NavBar from './NavBar';
import NavMenu from './NavMenu';

class Navigation extends Component {
	constructor(props) {
    super(props);

    this.state = {
      isToggleOn: false
    }

    this.handleClick = this.handleClick.bind(this);
  }


  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    if(this.hamButton.contains(e.target)) {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
    else if(!this.outside.contains(e.target)) {
      this.setState(prevState => ({
        isToggleOn: false
      }));
    }
  }
	render() {
		return (
			<div className="Navigation">
				<div ref={hamButton => this.hamButton = hamButton} className="hamburgerButton"> <HamburgerButton /> </div>
      	<NavBar />
      	<div ref={outside => this.outside = outside}>
        	<NavMenu isToggleOn={this.state.isToggleOn}/>
      	</div>
      </div>
		);
	}
}

export default Navigation;
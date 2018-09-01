import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import styles from './styles.css';

class Contact extends Component {
  render() {
    return (
    	<div className="ContactBox">
    		<a target="_blank" href="https://www.linkedin.com/in/matthew-lo-b1a39b134" className="icon"><i class="fab fa-linkedin"></i></a>
    		<a target="_blank" href="https://github.com/MatthewLo" className="icon"><i class="fab fa-github"></i></a>
    		<a target="_blank" href="mailto:matthewlom9@gmail.com" className="icon"><i class="fa fa-envelope"></i></a>
      </div>
    );
  }
}

export default Contact;

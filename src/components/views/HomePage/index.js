import React, { Component} from 'react';
import Contact from './Contact';
import BioCard from './BioCard';
import styles from './styles.css';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <div className="Name">
          MATTHEW LO
        </div>

        <div className = "picContainer">
          <img className ="myPic" src={require('./images/mypic.jpg')} />
        </div>
        <BioCard />
        <div className="Contact">
          < Contact />
        </div>
      </div>
    );
  }
}

export default HomePage;

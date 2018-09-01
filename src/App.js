import React, { Component } from 'react';
import HomePage from './components/views/HomePage';
import Navigation from './components/views/Navigation';
import About from './components/views/About';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
  	const Main = () => (
      <Switch>
      	<Route exact path='/' component={HomePage}></Route>
        <Route exact path='/about' component={About}></Route>
      </Switch>
    );

    return (
    	<div className="App">
    		<Navigation />
        <Main />
      </div>
    );
  }
}

export default App;

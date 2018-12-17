import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import TextSideBar from './components/TextSideBar';
import Content from './components/Content';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App" id="mainwrapper">
        <NavBar></NavBar>
        <TextSideBar></TextSideBar>
        <Route exact path="/" component={Content} />
        <Route path="/:content" component={Content} />
      </div>
      </Router>
    );
  }
}

export default App;

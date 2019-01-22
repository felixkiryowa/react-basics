import React, { Component } from 'react';
import './App.css';
import List from './Components/List';
import MyInfo from './Components/MyInfo';

class App extends Component {
  
  render() {
    return (
      <div className="App">
         <MyInfo />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
// import List from './Components/List';
// import MyInfo from './Components/MyInfo';
// import Checkboxes from './Components/Checkboxes';
// import ProductList from './Components/ProductList';
// import States from './Components/States';
// import HandlingEvents from './Components/HandlingEvents';
import ChangingState from './Components/ChangingState';

class App extends Component {
  
  render() {
    return (
      <div className="App">
         <ChangingState />
      </div>
    );
  }
}

export default App;

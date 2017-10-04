import React, { Component } from 'react';
import 'shoelace-css/dist/shoelace.css';
import './App.css';
import TextBox from './components/TextBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TextBox />
      </div>
    );
  }
}

export default App;

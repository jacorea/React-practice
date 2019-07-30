import React, { Component } from 'react';
import Main from '../Main';
import Time from '../Time';
import './App.css';
import 'whatwg-fetch';


class App extends Component {
 


  render() {
    return (
      <div className="App">  
        <Main />  
        <Time />
      </div>
    );
  }
}

export default App;

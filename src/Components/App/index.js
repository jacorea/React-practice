import React, { Component } from 'react';
import Series from '../../Containers/Series';
import Intro from '../Intro';
import Time from '../Time';
import './App.css';
import 'whatwg-fetch';


class App extends Component {
 


  render() {
    return (
      <div className="App">
        <Intro message="Here you can find all of your most loved series"/>     
        <Series />  
        <Time />
      </div>
    );
  }
}

export default App;

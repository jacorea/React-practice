import React, { Component } from 'react';
import Intro from '../Intro'
import Time from '../Time'
import './App.css'


class App extends Component {
  state = {
    series: []
  }

  render() {
    return (
      <div className="App">
        <Intro message="Here you can find all of your most loved series"/>
        The length of series array - {this.state.series.length}
        <Time />
      </div>
    );
  }
}

export default App;

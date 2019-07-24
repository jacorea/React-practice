import React, { Component } from 'react';
import Intro from '../Intro'
import Time from '../Time'
import './App.css'


class App extends Component {
  state = {
    series: []
  }

  componentDidMount() {
    const series = ["Band of Brothers", "Law & Order"];

    setTimeout(()=> {
      this.setState({series: series})
    }, 2000);
  }


  render() {
    return (
      <div className="App">
        <Intro message="Here you can find all of your most loved series"/>
        The length of series array - {this.state.series.length}
        <div>{this.state.series}</div>
        <Time />
      </div>
    );
  }
}

export default App;

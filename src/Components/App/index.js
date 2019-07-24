import React, { Component } from 'react';
import Intro from '../Intro';
import Time from '../Time';
import './App.css';
import 'whatwg-fetch';


class App extends Component {
  state = {
    series: [],
  }

  componentDidMount() {
    fetch('http://api.tvmaze.com/search/shows?q=law+%26+order')
      .then(response => response.json())
        .then(json => this.setState({ series: json}))
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

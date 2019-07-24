import React from 'react';
import '../App/App.css'


const getCurrentDate = () => {
  const date = new Date();
  return date.toDateString();
}


function Time() {
  return (
    <div className="App">
      <h1>Current Date: {getCurrentDate()}</h1>
    </div>
  );
}

export default Time;
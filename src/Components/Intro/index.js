import React from 'react';

const Intro = props => (
    <div>
        <div className="App-header">TV Series List</div>
        <p className="App-intro">
            {props.message}
        </p>
    </div>
  )

  export default Intro;
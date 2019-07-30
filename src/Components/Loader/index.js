import React from 'react';
import loader from '../../assets/img/loader.gif'


const Loader = props => (
    <div>
        <img 
        style = {{width:75}}
        src={loader}
        alt = "Loading icon"
        />
    </div>
);

export default Loader;
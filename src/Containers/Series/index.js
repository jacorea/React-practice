import React, { Component } from 'react'
import SeriesList from '../../Components/SeriesList'

export class Series extends Component {
    state = {
        series: [],
        }

    onSeriesChange = e => {
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then(response => response.json())
            .then(json => this.setState({ series: json}))
    }
    
    

    render() {
        return (
            <div>
                <div>
                    <input type="text" onChange={this.onSeriesChange}></input>
                </div>
                
                <SeriesList list={this.state.series} />
                <div>
                    The length of series array - {this.state.series.length}
                </div>
            </div>
        )
    }
}

export default Series

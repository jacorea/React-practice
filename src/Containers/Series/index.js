import React, { Component } from 'react'
import SeriesList from '../../Components/SeriesList'

export class Series extends Component {
    state = {
        series: [],
        seriesName: '',
        isFetching: false
        }

    onSeriesChange = e => {
        this.setState({seriesName: e.target.value, isFetching: true })
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then(response => response.json())
            .then(json => this.setState({ series: json, isFetching: false }))
    }
    
    

    render() {
        const { series, seriesName, isFetching } = this.state
        return (
            <div>
                <div>
                    <input 
                        value={seriesName}
                        type="text" 
                        onChange={this.onSeriesChange}
                        ></input>
                </div>
                {/* conditionals for loading. */}
                    {
                        series.length === 0 && seriesName.trim() === ''
                        &&
                        <p>Please enter seires name into the input</p>
                    }
                    {
                        series.length === 0 && seriesName.trim() !== ''
                        &&
                        <p>Sorry, no TV series have been found with this name.</p>
                    }
                    {
                        isFetching && <p>Loading ...</p>
                    }
                    {
                        !isFetching && <SeriesList list={this.state.series} />
                    }
                <div>
                    The length of series array - {this.state.series.length}
                </div>
            </div>
        )
    }
}

export default Series

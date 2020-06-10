import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = {
        readings: [],
    };

    removeReading = index => {
        const { readings } = this.state;
    
        this.setState({
            readings: readings.filter((reading, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = reading => {
        this.setState({ readings: [...this.state.readings, reading] })
    }

    render () {
        const { readings } = this.state

        return (
            <div className="container">
                <Table  readingData={readings} removeReading={this.removeReading} />
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default App
import React, { Component } from 'react'

class Form extends Component {
    initialState = {
        date: '',
        oxygen: '',
    }

    state = this.initialState

    handleChange = event => {
        const { date, value } = event.target

        this.setState({
            [date]: value,
        })
    }

    render() {
        const { date, oxygen } = this.state;

        return (
            <form>
                <label htmlFor="date">Date</label>
                <input
                    type="text"
                    name="date"
                    id="date"
                    value={date}
                    onChange={this.handleChange}
                />
                <label htmlFor="oxygen">Oxygen</label>
                <input 
                    type="text"
                    name="oxygen"
                    id="oxygen"
                    value={oxygen}
                    onChange={this.handleChange}
                />
            </form>
        )
    }
}

export default Form;
import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target
      
        this.setState({
          [name]: value,
        })
      }

    onFormSubmit = (event) => {
        event.preventDefault(); //prevents page refresh

        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { date, oxygen } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="date">Date</label>
                <input
                    type="text"
                    name="date"
                    id="date"
                    value={date}
                    onChange={this.handleChange} />
                <label htmlFor="oxygen">Oxygen</label>
                <input 
                    type="text"
                    name="oxygen"
                    id="oxygen"
                    value={oxygen}
                    onChange={this.handleChange} />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form;
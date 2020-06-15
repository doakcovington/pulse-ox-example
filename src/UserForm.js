import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

class UserForm extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            date: '',
            oxygen: ''
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
                    type="number"
                    name="oxygen"
                    id="oxygen"
                    value={oxygen}
                    onChange={this.handleChange} />
                <Button type="submit">Submit</Button>
            </form>
        )
    }
}

export default UserForm;